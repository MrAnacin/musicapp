import React from 'react';
import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../../store/api/musicApi';


const Playlist = () => {

  const {data = []} = useGetAllTracksQuery();

  const playlistItems = data.map((item) => (
    <PlaylistItem
      key={item.id}
      track={{
        id: item.id,
        title: item.name,
        author: item.author,
        album: item.album,
        time: (item.duration_in_seconds / 60).toFixed(2),
      }}
    />
  ));
  return (
    <div>
      <ul>{playlistItems}</ul>
    </div>
  );
};

export default Playlist;