import React, { useState } from "react";
import toast from "react-hot-toast";
import DeactivateUser from "../../../hooks/deactivateUser";
import { CardContainer, Flex, Text, StyledInput, StyledBtn } from "./styles";

const CloseAccountCard = ({ userId }) => {
  const { DeactivateUserApi = () => {} } = DeactivateUser();

  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleClick = async () => {
    if (!password) {
      toast.error("Please enter the password");
      return;
    }

    if (!retypePassword) {
      toast.error("Please Re-enter the password");
      return;
    }

    if (retypePassword !== password) {
      toast.error("Passwords didn't match");
      return;
    }

    await DeactivateUserApi({ id: userId, password });
  };

  return (
    <CardContainer>
      <Text>Deactivate account</Text>
      <Flex>
        <div>
          <StyledInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>Password</div>
        </div>
        <div>
          <StyledInput
            type="password"
            placeholder="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          <div>Confirm password</div>
        </div>
        <StyledBtn onClick={handleClick}>&rarr;</StyledBtn>
      </Flex>
    </CardContainer>
  );
};

export default CloseAccountCard;
