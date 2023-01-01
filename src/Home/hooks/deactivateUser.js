import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeactivateUser = () => {
  const navigate = useNavigate();
  const DeactivateUserApi = async ({ id, password }) => {
    const body = { id, password };

    try {
      await axios.post("http://localhost:4020/deactiveuser", body);
      toast.success("User Deativated");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (e) {
      toast.error(e);
    }
  };

  return { DeactivateUserApi };
};

export default DeactivateUser;
