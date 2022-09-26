import { useContext, useState } from "react";
import mainContext from "../contex/mainContext";

const SingleCard = ({ users }) => {
  const { likes, setLikes, dislikes, setDislikes } = useContext(mainContext);
  const [showedUser, setShowedUser] = useState(
    users[Math.floor(Math.random() * users.length)]
  );

  console.log(showedUser);

  function addLikes() {
    let newUserArr = [...likes];
    newUserArr.push(showedUser);
    setLikes(newUserArr);
    setShowedUser(users[Math.floor(Math.random() * users.length)]);
  }

  function addDislike() {
    let newUserArr = [...dislikes];
    newUserArr.push(showedUser);
    setDislikes(newUserArr);
    setShowedUser(users[Math.floor(Math.random() * users.length)]);
  }

  console.log(likes);

  return (
    <div className="single-card flex-column d-flex a-center j-center">
      <div className="profile-image d-flex a-center j-center">
        <div>
          <button className="btn"> ⪡ </button>
        </div>
        <div>
          {showedUser && (
            <div className="d-flex flex-column a-center">
              <img
                className="d-flex j-center a-center"
                src={showedUser.image[1]}
                alt="foto"
              />
              <div className="username">
                <div>{showedUser.username}</div>
              </div>
            </div>
          )}
        </div>
        <div>
          <button className="btn"> ⪢ </button>
        </div>
      </div>

      <div className="like-btn d-flex j-center g20">
        <button onClick={addLikes} className="like">
          Like
        </button>
        <button onClick={addDislike} className="dislike">
          Dislike
        </button>
      </div>
    </div>
  );
};
export default SingleCard;
