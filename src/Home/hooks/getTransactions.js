import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const GetTransactions = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const GetTransactionsApi = async ({ id }) => {
    try {
      setLoading(true);
      setResponse(
        await axios.get("http://localhost:4020/transaction", {
          params: { id },
        })
      );
      setLoading(false);
    } catch (e) {
      toast.error(e);
    }
  };

  return { response, loading, GetTransactionsApi };
};

export default GetTransactions;
