import { ISuggestionTile } from '../../../interfaces/components'

export const SuggestionTile = (props: ISuggestionTile) => {
  return (
    <li
      key={props.i}
      onClick={() => props.handleClick()}
      onMouseEnter={() => props.setSelected(props.value)}
      onMouseLeave={() => props.setSelected(undefined)}
      className={
        `${props.isSelected ? 'dark:bg-[#7c8291]' : ''}` +
        ' pl-8 pr-2 py-2 m-1 cursor-pointer rounded-lg bg-primary dark:bg-[#99a1b3]'
      }>
      {props.value.name}
    </li>
  )
}
