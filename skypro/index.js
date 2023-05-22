const buttons = [
    { id: "prev", svgClass: "player__btn-prev-svg", altText: "prev", xlinkHref: "img/icon/sprite.svg#icon-prev" },
    { id: "play", svgClass: "player__btn-play-svg", altText: "play", xlinkHref: "img/icon/sprite.svg#icon-play" },
    { id: "next", svgClass: "player__btn-next-svg", altText: "next", xlinkHref: "img/icon/sprite.svg#icon-next" },
    { id: "repeat", svgClass: "player__btn-repeat-svg", altText: "repeat", xlinkHref: "img/icon/sprite.svg#icon-repeat" },
    { id: "shuffle", svgClass: "player__btn-shuffle-svg", altText: "shuffle", xlinkHref: "img/icon/sprite.svg#icon-shuffle" }
  ];
  
  const Bar = () => {
    return (
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                {buttons.map((button) => (
                  <div key={button.id} className={`player__btn-${button.id} _btn`}>
                    <svg className={`player__btn-${button.id}-svg`} alt={button.altText}>
                      <use xlinkHref={button.xlinkHref}></use>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  ReactDOM.render(<Bar />, document.getElementById("root"));


  const playlists = [
    { id: 1, imgSrc: "img/playlist01.png", altText: "day's playlist" },
    { id: 2, imgSrc: "img/playlist02.png", altText: "day's playlist" },
    { id: 3, imgSrc: "img/playlist03.png", altText: "day's playlist" }
  ];
  
  const Sidebar = () => {
    return (
      <div className="sidebar__block">
        <div className="sidebar__list">
          {playlists.map((playlist) => (
            <div className="sidebar__item" key={playlist.id}>
              <a className="sidebar__link" href="#">
                <img className="sidebar__img" src={playlist.imgSrc} alt={playlist.altText} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  ReactDOM.render(<Sidebar />, document.getElementById("root"));
  
  