import axios from "axios";

const DoTransactions = () => {
  const DoTransactionsApi = async ({ sender_id, receiver_id, amount }) => {
    const body = { sender_id, receiver_id, amount };

    const response = await axios.post(
      "http://localhost:4020/transaction",
      body
    );
    return response;
  };

  return { DoTransactionsApi };
};

export default DoTransactions;
