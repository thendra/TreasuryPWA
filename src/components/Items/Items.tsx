import React from "react";
import { Box, Typography } from "@material-ui/core";
import { NetworkStatus, useMutation } from "@apollo/client";
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
  return (
    <Box>
      <Typography variant="h2">Your Items</Typography>
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
  );
};

export default Items;
