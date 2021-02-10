import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
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

  const [removeItem] = useMutation<RemoveItemMutation>(REMOVE_ITEM);
  const handleRemoveItem = (id: String) => {
    removeItem({
      variables: { id },
      refetchQueries: [{ query: GET_ITEMS }],
    });
  };
  const { isAuthenticated, user } = userInfo();

  return (
    <Box>
      {isAuthenticated && (
        <Box>
          <Typography variant="h1">Your Items</Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {data?.Items.filter((item) => item.created_by === user?.sub).map(
              ({ id, title, image_url, created_by }: IItems) => (
                <ItemSummary
                  id={id}
                  title={title}
                  image_url={image_url}
                  created_by={created_by}
                  onRemove={handleRemoveItem}
                />
              )
            )}
          </Box>
        </Box>
      )}
      {/* <Box>
        <Typography variant="h2">Public Items</Typography>
        {networkStatus === NetworkStatus.refetch && "Refetching!"}
        {networkStatus === NetworkStatus.loading && "loading..."}
        {error && `Error! ${error.message}`}
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {data?.Items.filter((item) => !!item.is_public).map(
            ({ id, title, image_url, created_by }: IItems) => (
              <ItemSummary
                id={id}
                title={title}
                image_url={image_url}
                created_by={created_by}
                onRemove={handleRemoveItem}
              />
            )
          )}
        </Box>
      </Box> */}
    </Box>
  );
};

export default Items;
