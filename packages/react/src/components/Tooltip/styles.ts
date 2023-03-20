import { styled } from '@stitches/react'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipBaloonContainer = styled(Tooltip.Provider, {
  transition: '0.1s',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
  backgroundColor: '$gray800',
  padding: '$4 1.625rem',
  borderRadius: '$sm',
  transition: '0.1s',
  cursor: 'pointer',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$md',

  '&:hover': {
    backgroundColor: '$gray600',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  fontFamily: '$default',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
