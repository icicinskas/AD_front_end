import mainContext from "../contex/mainContext";

import Login from "../components/Login";
import { useContext } from "react";

const LoginPage = ({ users }) => {
  const { setOpenPage } = useContext(mainContext);
  return (
    <div className="login-page">
      <Login setOpenPage={setOpenPage} users={users} />
    </div>
  );
};
export default LoginPage;
