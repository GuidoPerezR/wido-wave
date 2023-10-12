function TaskItem({ item }) {
  
  return (
    <div>
      <h1>{item.name}</h1>
      {item.artists.map((artist) => (
        <div key={artist.id}>
          <p>{artist.name}</p>
        </div>
      ))}
      <img src={item.album.images[1].url} alt="" />
    </div>
  );
}

export default TaskItem;
