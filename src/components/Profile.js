import { useRef } from "react";
import { useContext } from "react";
import mainContext from "../contex/mainContext";

const Profile = () => {
  const inputRef = useRef();

  const { openPage, currentUser, setCurrentUser, imgLength, setImgLength } =
    useContext(mainContext);

  function addImage() {
    const newImage = inputRef.current.value;

    setCurrentUser((user) => {
      const newImageArr = [...user.image];
      newImageArr.push(newImage);
      return { ...user, image: newImageArr };
    });

    console.log(newImage);

    const newUser = {
      username: currentUser.username,
      newImage,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    fetch("http://localhost:4000/addImage", options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setCurrentUser(data.data);
        }
        console.log(data);
      });
  }

  if (currentUser.image.length > 2) {
    setImgLength(true);
    console.log(imgLength);
  }

  return (
    <div className="profile d-flex j-center a-center">
      {openPage && (
        <div>
          <div className="profile-image d-flex a-center j-center">
            <div>
              <button className="btn"> ⪡ </button>
            </div>
            <div>
              <div className="d-flex flex-column a-center">
                {!imgLength && (
                  <img
                    className="d-flex j-center a-center"
                    src={currentUser.image[0]}
                    alt="foto"
                  />
                )}
                {imgLength && (
                  <img
                    className="d-flex j-center a-center"
                    src={currentUser.image[1]}
                    alt="foto"
                  />
                )}

                <div className="username">
                  <div>{currentUser.username}</div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn"> ⪢ </button>
            </div>
          </div>

          <div className="d-flex g5">
            {imgLength &&
              currentUser.image.map((x, i) => (
                <div key={i} className="mini-image d-flex g20">
                  <img src={currentUser.image[i]} alt="img" />
                </div>
              ))}
          </div>

          <div className="profile-input d-flex a-center j-center g20">
            <input ref={inputRef} type="text" placeholder="Enter image url " />
            <button onClick={addImage} className="add-btn">
              Add image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
