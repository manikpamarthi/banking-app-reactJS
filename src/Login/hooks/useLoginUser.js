import axios from "axios";

const useLoginUser = async ({ username, password }) => {
  const body = { username, password };
  const response = await axios.post("http://localhost:4020/login", body);
  return response;
};

export default useLoginUser;
