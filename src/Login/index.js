import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginUser from "./hooks/useLoginUser";
import { Title, Flex, UserInput, StyledForm, StyledBtn } from "./styles";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    const res = await LoginUser({ username: userName, password });
    localStorage.setItem("user", res.data.id);
    navigate("/");
  };

  return (
    <Flex>
      <Title>Log in to get started</Title>
      <img src="./assets/logo.png" alt="Logo" class="logo" />
      <StyledForm>
        <UserInput
          type="text"
          placeholder="username"
          class="login__input--user"
          autoFocus={true}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <UserInput
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          maxLength={8}
          class="login__input--pin"
        />
        <StyledBtn onClick={handleClick}>&rarr;</StyledBtn>
      </StyledForm>
    </Flex>
  );
};

export default Login;
