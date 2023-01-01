import React, { useState } from "react";
import toast from "react-hot-toast";
import DoTransactions from "../../../hooks/doTransaction";
import { CardContainer, Flex, Text, StyledInput, StyledBtn } from "./styles";

const TransferCard = ({ userId }) => {
  const { DoTransactionsApi = () => {} } = DoTransactions();

  const [receiverId, setReceiverId] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleClick = async () => {
    if (!receiverId) {
      toast.error("Please Enter the receiver's ID");
      return;
    }

    if (!amount) {
      toast.error("Please Enter the amount");
      return;
    }

    if (amount < 1) {
      toast.error("Please enter valid amount");
      return;
    }
    const res = await DoTransactionsApi({
      sender_id: userId,
      receiver_id: receiverId,
      amount,
    });

    if (res.data.error) {
      toast.error(res.data.error);
      return;
    }

    toast.success("Transaction Completed");
  };

  return (
    <CardContainer>
      <Text>Transfer Money</Text>
      <Flex>
        <div>
          <StyledInput
            type="number"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
          />
          <div>Transfer To</div>
        </div>
        <div>
          <StyledInput
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>Amount</div>
        </div>
        <StyledBtn onClick={handleClick}>&rarr;</StyledBtn>
      </Flex>
    </CardContainer>
  );
};

export default TransferCard;
