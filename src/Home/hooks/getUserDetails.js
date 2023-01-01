import axios from "axios";

const GetUserDetails = ({ setUserDetails = () => {} }) => {
  const GetUserDetailsApi = async ({ id }) => {
    const response = await axios.get("http://localhost:4020/login", {
      params: { id },
    });
    setUserDetails(response);

    return response;
  };

  return { GetUserDetailsApi };
};

export default GetUserDetails;
