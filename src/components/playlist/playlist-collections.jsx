import React from 'react';
import PlaylistItem from './playlistItem';
import { useGetSelectMusicQuery } from '../../store/api/musicApi';
import s from '../../style/style.module.css';

const PlaylistColl = () => {
//необходимо принять id подборки и добавить его useGetSelectMusicQuery(id);
  const {data = [], isLoading} = useGetSelectMusicQuery();

  if (isLoading) return <h1>Loading...</h1>
  
  const playlistItems = data.items.map((item) => (
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
      {/* Заголовой подборки title нужно принять при выборе подборки при клике на сообвествующий объект по id */}
      <h2 className={s.h2}>Заголовок подборки</h2> 
      <ul>{playlistItems}</ul> 
    </div>
  );
};

export default PlaylistColl;