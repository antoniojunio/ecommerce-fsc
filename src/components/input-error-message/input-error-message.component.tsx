import React, { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'

interface CustomInputProps {
  children: React.ReactNode
}

const InputErrorMessage: FunctionComponent<CustomInputProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
