import mainContext from "../contex/mainContext";

import Register from "../components/Register";
import { useContext } from "react";

const RegisterPage = ({ users }) => {
  const { setOpenPage } = useContext(mainContext);

  return (
    <div className="login-page">
      <Register setOpenPage={setOpenPage} users={users} />
    </div>
  );
};
export default RegisterPage;
