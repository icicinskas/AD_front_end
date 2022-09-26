import { useContext, useEffect } from "react";

import SingleCard from "../components/SingleCard";
import mainContext from "../contex/mainContext";

const MainPage = () => {
  const { users, setUsers } = useContext(mainContext);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        console.log(data);
      });
  }, []);

  return (
    <div className="main-page d-flex flex-colomn a-center j-center">
      <SingleCard users={users} />
    </div>
  );
};
export default MainPage;
