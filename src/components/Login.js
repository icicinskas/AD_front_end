import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../contex/mainContext";

const Login = () => {
  const { setOpenPage, currentUser, setCurrentUser, error, setError } =
    useContext(mainContext);

  const nav = useNavigate();

  const loginNameRef = useRef();
  const loginPassRef = useRef();

  const http = async (url, data) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("http://localhost:4000" + url, options);
    return res.json();
  };

  const login = async () => {
    const user = {
      username: loginNameRef.current.value,
      password: loginPassRef.current.value,
    };

    const result = await http("/login", user);
    console.log(result);
    console.log(result.data);

    if (!result.error) {
      // socket.emit("login", result.data);
      setOpenPage(true);
      setCurrentUser(result.data);
      nav("/profile");
    }

    setError(result.message);
  };

  console.log(currentUser);

  const autoLogin = (e) => {
    localStorage.setItem("autologin", String(e.target.checked));
  };

  useEffect(() => {
    const autologin = localStorage.getItem("autologin");

    if (autologin === "true") {
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      };

      fetch("http://localhost:4000/autologin", options)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setCurrentUser(data.user);
            nav("/profile");
          }
          console.log(data);
        });
    }
  }, []);

  return (
    <div className="login d-flex flex-column j-center a-center g20">
      <div className="input-log d-flex flex-column j-center a-center g20">
        <input ref={loginNameRef} type="text" placeholder="Username" />
        <input ref={loginPassRef} type="text" placeholder="Password" />
        <div>
          <input onChange={autoLogin} type="checkbox" id="check" />
          <label htmlFor="check"> Stay logged in </label>
        </div>
      </div>
      <div className="error">{error}</div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};
export default Login;
