import RecentTrackInfo from "./RecentTrackInfo";
import TaskItem from "./TaskItem";

function RecentPlayedTrack({ recentTrack }) {
  return (
    <div>
        <h1>Ultima Cancion Escuchada</h1>
      {recentTrack.map((track) => (
        <TaskItem key={track.track.id} item={track.track} />
      ))}
    </div>
  );
}

export default RecentPlayedTrack;
