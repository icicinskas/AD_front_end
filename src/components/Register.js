import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../contex/mainContext";

const Register = ({ http }) => {
  const { error, setError } = useContext(mainContext);

  const nav = useNavigate();

  const userNameRef = useRef();
  const passOneRef = useRef();
  const passTwoRef = useRef();
  const cityRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();

  const image = [
    "https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280.png",
  ];

  async function createUser() {
    const user = {
      username: userNameRef.current.value,
      passOne: passOneRef.current.value,
      passTwo: passTwoRef.current.value,
      city: cityRef.current.value,
      gender: genderRef.current.value,
      age: ageRef.current.value,
      image: image,
      id: Date.now(),
    };

    const result = await http("/register", user);
    console.log(result);

    if (!result.error) {
      nav("/");
    }

    setError(result.message);
  }

  return (
    <div className="register d-flex flex-column j-center a-center g20">
      <div className="input-reg d-flex flex-column j-center a-center g20">
        <input
          ref={userNameRef}
          type="text"
          placeholder="Enter your username"
        />
        <input ref={passOneRef} type="text" placeholder="Enter your password" />
        <input
          ref={passTwoRef}
          type="text"
          placeholder="Confirm your password"
        />
        <input ref={cityRef} type="text" placeholder="Enter city" />
        <input ref={genderRef} type="text" placeholder="Enter your gender" />
        <input ref={ageRef} type="number" placeholder="Enter your age" />
      </div>
      <div className="register-error"></div>
      {error}
      <div>
        <button onClick={createUser}>Create user</button>
      </div>
    </div>
  );
};
export default Register;
