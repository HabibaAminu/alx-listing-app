import React from 'react'
import { ButtonProps } from '../../interfaces'

const Button: React.FC <ButtonProps> = ({label, onClick}) => {
  return (
    <div><button onClick={onClick}className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
  >{label}</button></div>
  )
}

export default Button;