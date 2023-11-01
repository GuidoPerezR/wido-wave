import TrackItem from "./TrackItem";

function TopItemsInfo({ topItems }) {
  return (
    <div className="d-flex flex-column gap-3 mb-3">
      <h2 className="text-center"> Top of Last 4 Weeks</h2>
      {topItems.length > 0 ? (
        topItems.map((item) => <TrackItem key={item.id} item={item} />)
      ) : (
        <div>
          <h3 className="text-center mt-4 text-secondary">Listen your favorite songs to view this info</h3>

        </div>
      )}
    </div>
  );
}

export default TopItemsInfo;
