import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

interface FavNum {
  favNum: number;
}

const FavNum = ({ favNum }: FavNum) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <AiOutlineHeart
        color={isLiked ? "red" : "#ccc"}
        onClick={() => setIsLiked(!isLiked)}
        cursor="pointer"
      />
      <Text>{favNum}</Text>
    </Box>
  );
};

export default FavNum;
