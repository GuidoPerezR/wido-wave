function TrackItem({ item }) {
  return (
    <div className="container my-3">
      <div className="row align-items-center">
        <div className="col">
          <img
            src={item.album.images[1].url}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-8">
          <p className="text-center">{item.name}</p>

          <div className="d-flex justify-content-center">
            <p>{item?.artists[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackItem;
