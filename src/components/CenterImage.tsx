import { Center, Image } from "@chakra-ui/react";
import React from "react";

interface IAlt {
    imageUrl: string,
    imageAlt: string
}

const CenterImage = ({ imageUrl, imageAlt }: IAlt) => {
  return (
    <Center>
      <Image src={imageUrl} alt={imageAlt} objectFit="cover" height="300" />
    </Center>
  );
};

export default CenterImage;
