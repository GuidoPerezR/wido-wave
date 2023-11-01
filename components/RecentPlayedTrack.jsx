import RecentTrackItem from "./RecentTrackItem";

function RecentPlayedTrack({ recentTrack }) {
  return (
    <div className="d-flex flex-column p-3 h-100 bg-opacity-75 gap-2 rounded-4">
      <h2 className="text-center">Last Song</h2>
      {recentTrack.map((track) => (
        <RecentTrackItem key={track.track.id} item={track.track} />
      ))}
    </div>
  );
}

export default RecentPlayedTrack;
