function RecentTrackItem({ item }) {
  return (
    <div className="d-flex flex-column align-items-center gap-2 ">
      <img
        src={item.album.images[1].url}
        className="img-fluid"
        alt=""
        width="150px"
        height="auto"
      />
      <p className="text-center">{item.name}</p>
      <div className="d-flex">
        <p className="text-center text-light text-opacity-50">{item?.artists[0].name}</p>
      </div>
    </div>
  );
}

export default RecentTrackItem;
