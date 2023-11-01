import notUserImage from "/user.png";

function UserInfo({ user, isUser }) {
  return (
    <div className="d-flex flex-column align-items-center gap-2 p-3 h-100 rounded-4">
      <h2 className="text-center">Welcome</h2>
      <img
        src={
          isUser !== false && user?.images.length > 0
            ? user?.images[1].url
            : notUserImage
        }
        alt=""
        className="img-fluid"
        width="150px"
        height="auto"
      />
      <p>{user.display_name}</p>
    </div>
  );
}

export default UserInfo;
