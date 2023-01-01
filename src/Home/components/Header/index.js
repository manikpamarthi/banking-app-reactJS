import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Title, LogoutButton } from "./styles";

const Header = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Flex>
      <Title>Welcome back {username}</Title>
      <LogoutButton type="button" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </Flex>
  );
};

export default Header;
