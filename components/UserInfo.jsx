function UserInfo({ user, isUser }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        src={
          isUser !== false && user?.images.length > 0
            ? user?.images[1].url
            : "../src/assets/user.png"
        }
        alt=""
        className="img-fluid"
        width="100px"
        height="auto"
      />
      <h4>{user.display_name}</h4>
    </div>
  );
}

export default UserInfo;
