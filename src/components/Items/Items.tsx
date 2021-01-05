import React from "react";
import { Box, Typography } from "@material-ui/core";
import { NetworkStatus, useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { REMOVE_ITEM, ITEMS } from "../../graphQl";
import { Items as IItems, useGetItemsQuery } from "../../output-types";
import ItemSummary from "../ItemSummary";

const Items = () => {
  const { data, networkStatus, error } = useGetItemsQuery({
    notifyOnNetworkStatusChange: true,
  });

  const [removeItem] = useMutation(REMOVE_ITEM);
  const handleRemoveItem = (id: String) => {
    removeItem({
      variables: { id },
      refetchQueries: [{ query: ITEMS }],
    });
  };

  const { isAuthenticated } = useAuth0();

  return (
    <Box>
      {isAuthenticated && (
        <Box>
          <Typography variant="h2">Your Items</Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {data?.Items.filter((item) => !!item.is_public).map(
              ({ id, title, image_url }: IItems) => (
                <ItemSummary
                  id={id}
                  title={title}
                  image_url={image_url}
                  onRemove={handleRemoveItem}
                />
              )
            )}
          </Box>
        </Box>
      )}
      <Box>
        <Typography variant="h2">Public Items</Typography>
        {networkStatus === NetworkStatus.refetch && "Refetching!"}
        {networkStatus === NetworkStatus.loading && "loading..."}
        {error && `Error! ${error.message}`}
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {data?.Items.map(({ id, title, image_url }: IItems) => (
            <ItemSummary
              id={id}
              title={title}
              image_url={image_url}
              onRemove={handleRemoveItem}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Items;
