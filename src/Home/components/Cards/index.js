import React from "react";
import CloseAccountCard from "./CloseAccountCard";
import TransferCard from "./TransferCard";
import { Container } from "./styles";

const Cards = ({ userId }) => {
  return (
    <Container>
      <TransferCard userId={userId} />
      <CloseAccountCard userId={userId} />
    </Container>
  );
};

export default Cards;
