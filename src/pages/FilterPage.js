import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../contex/mainContext";

const FilterPage = () => {
  const { users, gender, setGender, age, setAge, setUsers } =
    useContext(mainContext);

  const nav = useNavigate();

  const selectCityRef = useRef();

  function selectAge(e) {
    console.log({ e });
    const ageValue = e.target.value;
    setAge(ageValue);
  }

  function doFilter() {
    const city = selectCityRef.current.value;
    console.log({ users });

    const filteredUsers = users.filter(
      (user) => user.gender === gender || user.age >= age || user.city === city
    );

    setUsers(filteredUsers);

    console.log(filteredUsers);

    nav("/main");
  }

  return (
    <div className="filter-page d-flex j-center a-center g40">
      <div className="filter-box d-flex flex-column j-center a-center g40">
        <div className="d-flex flex-column g10">
          <select className="select-input d-flex p5" ref={selectCityRef}>
            <option>All city</option>
            {users.map((x, i) => (
              <option key={i}>{x.city}</option>
            ))}
          </select>
          <label className="d-flex j-center a-center">(select city)</label>
        </div>

        <div className="d-flex g10">
          <button className="filter-btn " onClick={() => setGender("moteris")}>
            Woman
          </button>
          <button className="filter-btn " onClick={() => setGender("vyras")}>
            Man
          </button>
        </div>

        <div className="d-flex flex-column a-center">
          <div className="d-flex a-center ">
            <p>18 </p>
            <div>
              <input
                className="select-age"
                // ref={selectAgeRef}
                type="range"
                min="18"
                max="66"
                step="1"
                onChange={selectAge}
              />
            </div>
            <p> 66</p>
          </div>
          <div className="value">
            <label htmlFor="range">(select age)</label>
            <p className="span">
              Value: <span>{age}</span>
            </p>
          </div>
        </div>

        <div className="save-filter">
          <button onClick={doFilter} className="filter-btn">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
