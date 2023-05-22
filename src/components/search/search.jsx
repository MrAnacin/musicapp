import styles from '../search/search.module.css'
import Sprite from '../../assets/icons/sprite.svg'
import { useThemeContext } from '../../contexts/theme'

export default function Search(props) {
  const { themes, currentTheme } = useThemeContext()
  console.log(currentTheme)
  console.log(themes)

  return (
    <div
      className={styles.centerblock__search}
      style={{ borderBottom: `1px solid ${currentTheme['--border-bottom']}` }}
    >
      <svg
        className={
          currentTheme.theme === 'dark'
            ? styles.search__svg
            : styles.search__svg_light
        }
        style={{ stroke: currentTheme['--a-color'] }}
      >
        {currentTheme.theme === 'dark' ? (
          <use xlinkHref={`${Sprite}#icon-search`}></use>
        ) : (
          <use xlinkHref={`${Sprite}#icon-search-light`}></use>
        )}
        <use xlinkHref={`${Sprite}#icon-search`}></use>
      </svg>
      <input
        className={
          currentTheme.theme === 'dark'
            ? styles.search__text
            : styles.search__text_light
        }
        type="search"
        placeholder="Поиск"
        name="search"
      />{' '}
    </div>
  )
}
