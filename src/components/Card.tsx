import React from "react";
import { Box, Button, Badge, Center, Text } from "@chakra-ui/react";

import Extra from "./Extra";
import Badgee from "./Badge";
import ProductDescription from "./ProductDescription";
import FavNum from "./FavNum";
import CenterImage from "./CenterImage";
import Timer from "./Timer";

interface IProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  label: string;
  favNum: number;
  price: number;
  hasExtraButton?: boolean;
  buttonText: string;
}

const Card: React.FC<IProps> = ({
  imageUrl,
  imageAlt,
  title,
  label,
  favNum,
  price,
  hasExtraButton,
  buttonText,
}) => {
  return (
    <Box maxW="xs" boxShadow="2xl" rounded="md" overflow="hidden" width="100%">
      <Box
        display="flex"
        justifyContent="space-around"
        pt="5"
        pb="5"
        alignItems="center"
      >
        <Badgee />
        <Badge
          p="4px 10px"
          borderRadius="full"
          backgroundColor="transparent"
          border={hasExtraButton ? "2px solid blue" : "2px solid orange"}
        >
          {hasExtraButton ? "SALE" : "AUNCTION"}
        </Badge>
      </Box>
      <CenterImage imageAlt={imageAlt} imageUrl={imageUrl} />
      <Box display="flex" pt="5" pb="5" justifyContent="space-around">
        <ProductDescription title={title} label={label} />
        <FavNum favNum={favNum} />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
        <Box border="1px solid green" p={2}>
          {hasExtraButton ? (
            <Box width="70px" height="40px">
              <Badge
                backgroundColor="green.500"
                position="relative"
                top="-60%"
                left="10%"
                borderRadius="full"
                p="2px 8px"
              >
                15% OFF
              </Badge>
              <Box
                position="relative"
                top="-60%"
                left="5%"
                fontSize="sm"
                color="red.500"
                fontWeight="bold"
                textDecoration="line-through"
              >
                $300
              </Box>
              <Text fontWeight="bold" position="relative" top="-70%" left="5%">
                ${price}
              </Text>
            </Box>
          ) : (
            <>
              <Box fontSize="xs" color="green.300" fontWeight="bold">
                HIGHEST BID
              </Box>
              <Text fontWeight="bold">${price}</Text>
            </>
          )}
        </Box>
        <Timer price={price} />
      </Box>

      <Center>
        <Button
          backgroundColor={hasExtraButton ? "transparent" : "blue.600"}
          width={hasExtraButton ? "50%" : "100%"}
          border={hasExtraButton ? "1px solid white" : "blue"}
          m={6}
        >
          {buttonText}
        </Button>
        {hasExtraButton && <Extra />}
      </Center>
    </Box>
  );
};

export default Card;
