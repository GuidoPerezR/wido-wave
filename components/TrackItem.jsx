function TrackItem({ item }) {
  return (
    <div className="container bg-secondary bg-opacity-25">
      <div className="row align-items-center">
        <div className="col ps-0">
          <img
            src={item.album.images[1].url}
            className="img-fluid"
            width="100px"
            height="auto"
            alt=""
          />
        </div>
        <div className="col-8 ps-0">
          <p>{item.name}</p>

          <div className="d-flex">
            <p className="text-light text-opacity-50">{item?.artists[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackItem;
