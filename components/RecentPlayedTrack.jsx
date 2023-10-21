import RecentTrackItem from "./RecentTrackItem";

function RecentPlayedTrack({ recentTrack }) {
  return (
    <div className="d-flex flex-column">
      <h4 className="text-center">Last Song</h4>
      {recentTrack.map((track) => (
        <RecentTrackItem key={track.track.id} item={track.track} />
      ))}
    </div>
  );
}

export default RecentPlayedTrack;
