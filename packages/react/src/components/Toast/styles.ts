import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '@stitches/react'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const ToastAlertContainer = styled(Toast.Viewport, {
  all: 'unset',
})

export const ToastRoot = styled(Toast.Root, {
  width: '390px',
  padding: '$4',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  listStyle: 'none',
  gap: '$2',

  '.titleAndClose': {
    width: '100%',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'space-between',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-ezier(0.16, 1, 0.3, 1)`,
  },

  button: {
    all: 'unset',
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  padding: '0 0 $2 0',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  '.closeButton': {
    color: '$gray200',
    cursor: 'pointer',
  },
})
