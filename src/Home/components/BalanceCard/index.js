import React from "react";
import { Flex, Text, DateDiv, Amount } from "./styles";

const BalanceCard = ({ balance = 0 }) => {
  const date = new Date().toLocaleString();

  return (
    <Flex>
      <div>
        <Text>Current balance</Text>
        <DateDiv>
          As of <strong>{date}</strong>
        </DateDiv>
      </div>
      <Amount>{balance} $</Amount>
    </Flex>
  );
};

export default BalanceCard;
