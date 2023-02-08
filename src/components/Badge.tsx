import React from "react";
import { Badge } from "@chakra-ui/react";

const Badgee = () => {
  return (
    <Badge
      p="4px 10px"
      borderRadius="full"
      textTransform="capitalize"
      border="2px solid violet"
      backgroundColor="transparent"
      color="violet"
    >
      Hot Deal
    </Badge>
  );
};

export default Badgee;
