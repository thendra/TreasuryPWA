import React, { useEffect, useState } from "react";
import {
  Theme,
  Box,
  Typography,
  Hidden,
  TextField,
  // Checkbox,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { gql, useQuery, useMutation } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useParams } from "react-router-dom";
import { GET_ITEM_BY_ID, UPDATE_ITEM_DESCRIPTION } from "../../graphQl/queries";
import {
  GetItemByIdQuery,
  UpdateItemDescriptionMutation,
} from "../../output-types";
import { userInfo } from "../AppProvider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  mainImage: {
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const DESCRIPTION_SUBSCRIPTION = gql`
  subscription onDescUpdate($itemId: String!) {
    Items_by_pk(id: $itemId) {
      id
      description
    }
  }
`;

const ItemDetailed = () => {
  const { id } = useParams();
  const { user } = userInfo();

  const { subscribeToMore, data } = useQuery<GetItemByIdQuery>(GET_ITEM_BY_ID, {
    variables: {
      itemId: id,
    },
    notifyOnNetworkStatusChange: true,
  });
  const classes = useStyles();
  const item = data?.Items_by_pk;
  const canEdit = item?.created_by === user?.sub;
  const [editMode, setEditMode] = useState(false);
  const [updateItemMutation] = useMutation<UpdateItemDescriptionMutation>(
    UPDATE_ITEM_DESCRIPTION,
    {
      variables: {
        id,
        description: item?.description,
      },
    }
  );

  const [updateDescValue, setDescValues] = useState({
    id: id,
    description: item?.description,
  });
  useEffect(
    () =>
      setDescValues({
        id: id,
        description: item?.description,
      }),
    [id, item]
  );

  const handleDescChange = () => {
    setEditMode(false);
    updateItemMutation({ variables: { ...updateDescValue } });
  };

  // const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   updateItemMutation({ variables: { is_public: event.target.checked } });
  // };

  const subscribeToDescriptionUpdates = () => {
    subscribeToMore({
      document: DESCRIPTION_SUBSCRIPTION,
      variables: { itemId: id },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFeedItem = subscriptionData.data.Items_by_pk?.description;
        return Object.assign({}, prev, {
          Item: {
            description: newFeedItem,
          },
        });
      },
    });
  };

  subscribeToDescriptionUpdates();

  return (
    <Box className={classes.root}>
      {/* {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`} */}
      {item && (
        <>
          <Hidden mdUp>
            <Typography display="block" align="left" variant="h2">
              {item?.title}
            </Typography>
          </Hidden>
          <img
            className={classes.mainImage}
            src={item?.image_url || ""}
            alt={item?.title as string}
          />
          <Box
            paddingLeft={2}
            paddingRight={2}
            width="50%"
            display="flex"
            flexDirection="column"
          >
            <Hidden smDown>
              <Typography display="block" align="left" variant="h1">
                {item?.title}
              </Typography>
              {/* <Checkbox
                checked={item?.is_public || false}
                onChange={handleIsPublicChange}
              /> */}
            </Hidden>
            <Box
              display="flex"
              bgcolor="white"
              flex="1"
              padding={2}
              borderRadius={8}
            >
              {!editMode ? (
                <Box flex="1" display="flex" justifyContent="space-between">
                  <Typography align="left" variant="body1">
                    {updateDescValue.description ||
                      "Click on the edit button to add a description..."}
                  </Typography>
                  {canEdit && <EditIcon onClick={() => setEditMode(true)} />}
                </Box>
              ) : (
                <ClickAwayListener onClickAway={handleDescChange}>
                  <TextField
                    value={updateDescValue.description}
                    fullWidth
                    defaultValue="Add a description of your item here..."
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    onChange={(e) => {
                      setDescValues({
                        id,
                        description: e.target.value,
                      });
                    }}
                    variant="outlined"
                  />
                </ClickAwayListener>
              )}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ItemDetailed;
