import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { REMOVE_ITEM, GET_ITEMS } from "../../graphQl/queries";
import {
  Items as IItems,
  GetItemsQuery,
  RemoveItemMutation,
} from "../../output-types";
import ItemSummary from "../ItemSummary";
import { userInfo } from "../AppProvider";

const Items = () => {
  const { data } = useQuery<GetItemsQuery>(GET_ITEMS, {
    notifyOnNetworkStatusChange: true,
  });
  const { user } = userInfo();
  const [removeItem] = useMutation<RemoveItemMutation>(REMOVE_ITEM);
  const handleRemoveItem = (id: String) => {
    removeItem({
      variables: { id },
      refetchQueries: [{ query: GET_ITEMS }],
    });
  };
  const { isAuthenticated } = useReactiveVar(userInfo);

  return (
    <Box>
      {isAuthenticated && (
        <Box>
          <Box py={3}>
            <Typography variant="h1">Your Items</Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {data?.Items.filter(
                (item) => item.created_by === data.userId
              ).map(({ id, title, image_url, created_by }: IItems) => (
                <ItemSummary
                  id={id}
                  key={id}
                  title={title}
                  image_url={image_url}
                  canDelete={created_by === user?.sub}
                  onRemove={handleRemoveItem}
                />
              ))}
            </Box>
          </Box>
          <Box py={3}>
            <Typography variant="h2">Public Items</Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {data?.Items.map(
                ({ id, title, image_url, created_by }: IItems) => (
                  <ItemSummary
                    id={id}
                    key={id}
                    title={title}
                    image_url={image_url}
                    canDelete={created_by === user?.sub}
                    onRemove={handleRemoveItem}
                  />
                )
              )}
            </Box>
          </Box>
        </Box>
        )}
    </Box>
  );
};

export default Items;
