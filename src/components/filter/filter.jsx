import styles from '../filter-by/filter.module.css'
import * as React from 'react'
import Downshift from 'downshift'
import { useSelect } from 'downshift'
import { useState } from 'react'
import { useThemeContext } from '../../contexts/theme'

export default function Filter({ options, optName }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items: options })

  // const [activeState, setActiveState] = useState(false)

  // const [selectedOption, setSelectedOption] = useState(null)
  // const defaultOption = options[0]
  const { currentTheme } = useThemeContext()

  return (
    <div className={styles.options}>
      <div
        className={`${styles.filter__button} ${styles.button_author} ${
          styles.btn_text
        } ${isOpen ? styles.dropdwn_active : ''}`}
        style={{
          border: `1px solid ${currentTheme['--a-color']}`,
          color: currentTheme['--a-color'],
        }}
        {...getToggleButtonProps()}
      >
        {selectedItem ?? optName}
      </div>
      <div className={styles.scrollabale_menu_padding}>
        <ul
          className={`${styles.filter__dropdown_content} ${
            isOpen ? styles.srcollabale_menu : ''
          }`}
          style={{
            backgroundColor: currentTheme['--page-background'],
            boxShadow: currentTheme['--dropdwn-shadow'],
            border: `${
              isOpen
                ? `30px solid ${currentTheme['--page-background']}`
                : ''
            }`,
          }}
          {...getMenuProps()}
        >
          {isOpen &&
            options.map((item, index) => (
              <li
                className={styles.filter__dropdown_item}
                
                key={`${item}${index}`}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                {item.value}
              </li>
            ))}
        </ul>
      </div>

      {/* <ul
        className={`filter__dropdown-content ${
          isOpen ? 'srcollabale-menu' : ''
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          options.map((item, index) => (
            <li
              className="filter__dropdown-item"
              key={`${item}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              {item.value}
            </li>
          ))}
      </ul> */}
      {/* <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div> */}
    </div>
  )
}
