import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastAlertContainer,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from './styles'

export interface ToastAlertProps
  extends ComponentProps<typeof ToastAlertContainer> {}

export function ToastAlert() {
  return (
    <Toast.Provider swipeDirection="right">
      <ToastRoot duration={5000}>
        <div className="titleAndClose">
          <ToastTitle>Agendamento Realizado</ToastTitle>
          <ToastClose>
            <X className="closeButton" size={20} />
          </ToastClose>
        </div>
        <ToastDescription>Sexta-feira, 17 de Março às 16h</ToastDescription>
      </ToastRoot>

      <Toast.Viewport />
    </Toast.Provider>
  )
}
