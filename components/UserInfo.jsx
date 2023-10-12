function UserInfo({ user, isUser }) {
  return (
    <div>
      <h1>{user.display_name}</h1>
      <h1>{user?.followers?.total}</h1>
      <img
        src={
          isUser !== false && user?.images.length > 0
            ? user?.images[1].url
            : "../src/assets/user.png"
        }
        alt=""
      />
    </div>
  );
}

export default UserInfo;
