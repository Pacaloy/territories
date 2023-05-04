import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../UserContext";

function Home() {
  const { isAuthorize } = useContext(UserContext);

  return (
    (isAuthorize) ? <>Home</> : <Navigate to="/account/login" />
  );
};

export default Home;
