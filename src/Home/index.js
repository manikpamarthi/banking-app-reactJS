import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GetTransactions from "./hooks/getTransactions";
import GetUserDetails from "./hooks/getUserDetails";
import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import Transactions from "./components/Transactions";
import Cards from "./components/Cards";
import { Container, SmallContainer, Flex } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({});

  const { response, loading, GetTransactionsApi } = GetTransactions();
  const { GetUserDetailsApi } = GetUserDetails({ setUserDetails });

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    GetTransactionsApi({ id: user });
    GetUserDetailsApi({ id: user });
  }, []);

  return (
    <Container>
      <Toaster />
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Header username={userDetails?.data?.data?.name} />
          <SmallContainer>
            <BalanceCard balance={userDetails?.data?.data?.amount} />
            <Flex>
              <Transactions data={response?.data?.data} userId={user} />
              <Cards userId={user} />
            </Flex>
          </SmallContainer>
        </>
      )}
    </Container>
  );
};

export default Home;
