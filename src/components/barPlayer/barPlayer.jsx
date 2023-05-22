import Sprite from '../../assets/icons/sprite.svg'
import { PropsWithChildren, useState, useEffect, useRef } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../bar/barPlayer.module.css'
import { useThemeContext } from '../../contexts/theme'

export default function BarPlayer({ audioRef }) {
  console.log(audioRef)
  const [loadingPage, setLoadingPage] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const { currentTheme } = useThemeContext()
  // const audioRef = useRef(null)

  const playStart = () => {
    audioRef.current.play()
    console.log('play')
    setIsPlaying(true)
  }

  const playStop = () => {
    audioRef.current.pause()
    console.log('stop')
    setIsPlaying(false)
  }

  const playBtn = (
    <div className={`${styles.player__btn_play} ${styles.btn}`}>
      <svg
        className={styles.player__btn_play_svg}
        alt="play"
        onClick={playStart}
      >
        <use xlinkHref={`${Sprite}#icon-play`}></use>
      </svg>
    </div>
  )
  const stopBtn = (
    <div className={`${styles.player__btn_stop} ${styles.btn}`}>
      <svg
        className={styles.player__btn_stop_svg}
        alt="stop"
        onClick={playStop}
        // width="15"
        // height="19"
        // viewBox="0 0 15 19"
        // fill="none"
        // xmlns="http://www.w3.org/2000/svg"
      >
        {/* <rect width="5" height="19" fill="#D9D9D9" />
        <rect x="10" width="5" height="19" fill="#D9D9D9" /> */}
        <use xlinkHref={`${Sprite}#icon-pause`}></use>
      </svg>
    </div>
  )

  const togglePlay = isPlaying ? stopBtn : playBtn

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={styles.bar__player}>
      <div className={styles.player__controls}>
        <div className={styles.player__btn_prev}>
          <svg className={styles.player__btn_prev_svg} alt="prev">
            <use xlinkHref={`${Sprite}#icon-prev`}></use>
          </svg>
        </div>
        {togglePlay}
        <div className={styles.player__btn_next}>
          <svg className={styles.player__btn_next_svg} alt="next">
            <use xlinkHref={`${Sprite}#icon-next`}></use>
          </svg>
        </div>
        <div className={`${styles.player__btn_repeat} ${styles.btn_icon}`}>
          <svg className={styles.player__btn_shuffle_svg} alt="repeat">
            <use xlinkHref={`${Sprite}#icon-repeat`}></use>
          </svg>
        </div>
        <div className={`${styles.player__btn_shuffle} ${styles.btn_icon}`}>
          <svg className={styles.player__btn_shuffle_svg} alt="shuffle">
            <use xlinkHref={`${Sprite}#icon-shuffle`}></use>
          </svg>
        </div>
      </div>

      <div className={styles.player__track_play}>
        <div className={styles.track_play__contain}>
          <div className={styles.track_play__image} style={{background: currentTheme['--page-background']}}>
            <SkeletonTheme baseColor="#313131" highlightColor="#313131">
              {loadingPage ? (
                <Skeleton width={51} height={51} borderRadius={0} count={1} />
              ) : (
                <svg className={styles.track_play__svg} alt="music">
                  <use xlinkHref={`${Sprite}#icon-note`}></use>
                </svg>
              )}
            </SkeletonTheme>
          </div>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={59} height={15} borderRadius={0} count={1} />
            ) : (
              <div className={styles.track_play__author}>
                <a
                  className={styles.track_play__author_link}
                  style={{ color: currentTheme['--a-color'] }}
                  href="http://"
                >
                  Ты та...
                </a>
              </div>
            )}
          </SkeletonTheme>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={59} height={15} borderRadius={0} count={1} />
            ) : (
              <div className={styles.track_play__album}>
                <a
                  className={styles.track_play__album_link}
                  style={{ color: currentTheme['--a-color'] }}
                  href="http://"
                >
                  Баста
                </a>
              </div>
            )}
          </SkeletonTheme>
        </div>

        <div className={styles.track_play__like_dis}>
          <div className={`${styles.track_play__like} ${styles.btn_icon}`}>
            <svg className={styles.track_play__like_svg} alt="like">
              <use xlinkHref={`${Sprite}#icon-like`}></use>
            </svg>
          </div>
          <div className={`${styles.track_play__dislike} ${styles.btn_icon}`}>
            <svg className={styles.track_play__dislike_svg} alt="dislike">
              <use xlinkHref={`${Sprite}#icon-dislike`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
