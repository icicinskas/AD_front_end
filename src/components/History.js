const History = ({ user }) => {
  return (
    <div className="history d-flex flex-wrap">
      <div className="history-box d-flex flex-wrap">
        {user && (
          <div className="d-flex flex-column a-center j-center">
            <img
              className="d-flex j-center a-center"
              src={user.image[1]}
              alt="foto"
            />
            <div className="username">
              <div>{user.username}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default History;
