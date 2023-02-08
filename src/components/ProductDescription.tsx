import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  label: string;
  title: string;
}

const ProductDescription = ({ label, title }: Props) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Text color="blue.400" fontSize="sm">
        {label}
      </Text>
    </Box>
  );
};

export default ProductDescription;
