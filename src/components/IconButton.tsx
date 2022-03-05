import { useNavigate } from 'react-router-dom'
import { IIconButton } from '../interfaces/components'

export const IconButton = ({ text, handleClick, icon }: IIconButton) => {
  const navigate = useNavigate()
  return (
    <button
      className='flex text-center mr-6 px-3 py-2 bg-secondary rounded-lg hover:bg-searchhover transition ease-in-out shadow-md'
      onClick={() => {
        if (handleClick) {
          handleClick()
        } else {
          navigate(-1)
        }
      }}>
      {icon}
      <span className='text-center ml-2'>{text}</span>
    </button>
  )
}
