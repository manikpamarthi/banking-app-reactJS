import React from "react";
import SingleCard from "./card";
import { Container } from "./styles";

const Transactions = ({ data = [{}], userId }) => {
  return (
    <Container>
      {data.map((item) => {
        return <SingleCard item={item} userId={userId} />;
      })}
    </Container>
  );
};

export default Transactions;
