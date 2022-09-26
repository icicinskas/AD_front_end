import { useContext } from "react";
import { Link } from "react-router-dom";
import mainContext from "../contex/mainContext";

const Toolbar = () => {
  const {
    openPage,
    setOpenPage,
    setCurrentUser,
    setError,
    imgLength,
    setImgLength,
    setLikes,
  } = useContext(mainContext);

  function logout() {
    setOpenPage(false);
    setCurrentUser([]);
    setError(null);
    setImgLength(false);
    setLikes([]);
  }

  return (
    <div className="toolbar d-flex a-center">
      {!openPage ? (
        <div className="d-flex j-center a-center g40">
          <Link to={"/register"}> Register </Link>
          <Link to={"/"}> Login </Link>
        </div>
      ) : (
        <div className="toolbar-main  d-flex j-space-btw">
          <div className="d-flex g40">
            <Link to={"/profile"}> Profile </Link>
            {imgLength && (
              <div className="d-flex g40">
                <Link to={"/main"}> Users </Link>
                <Link to={"/filter"}> Filter </Link>
                <Link to={"/likes"}> History </Link>
              </div>
            )}
          </div>
          <div>
            <Link to={"/"} onClick={logout}>
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Toolbar;
