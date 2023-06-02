import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaylist } from '../../store/actions/creators/getSelection';
import PlaylistItem from '../playlist/playlistItem';

const Playlist = ({ id }) => {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist.playlist);
  console.log('selectionTrack', playlist)
  const error = useSelector((state) => state.playlist.error);

  useEffect(() => {
    dispatch(getPlaylist(id));
  }, [dispatch, id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {playlist.map((track) => (
        <PlaylistItem
          key={track.id}
          track={{
            id: track.id,
            title: track.name,
            author: track.author,
            album: track.album,
            time: (track.duration_in_seconds / 60).toFixed(2),
          }}
        />
      ))}
    </div>
  );
};

export default Playlist;