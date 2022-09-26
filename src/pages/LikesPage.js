import { useContext } from "react";
import mainContext from "../contex/mainContext";
import History from "../components/History";
import Likes from "../components/Likes";

const LikesPage = () => {
  const { likes } = useContext(mainContext);

  console.log(likes);

  return (
    <div className="likes-page d-flex">
      <div className="d-flex grow1 flex-wrap">
        <div className="like-bar i-like d-flex j-center a-center ">
          People I like ({likes.length})
        </div>
        {likes && likes.map((user, i) => <History key={i} user={user} />)}
      </div>
      <div className="d-flex flex-column grow1">
        <div className="like-bar me-like d-flex j-center a-center">
          People who liked me
        </div>
        <Likes />
      </div>
    </div>
  );
};
export default LikesPage;
