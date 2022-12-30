import axios from "axios";

const getTransactions = async ({ id }) => {
  const response = await axios.get("http://localhost:4020/transaction", {
    params: { id },
  });
  return response;
};

export default getTransactions;
