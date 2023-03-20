import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipBaloonContainer,
  TooltipContent,
  TooltipTrigger,
} from './styles'

export interface TooltipBaloonProps
  extends ComponentProps<typeof TooltipBaloonContainer> {}

export function TooltipBaloon() {
  return (
    <TooltipBaloonContainer>
      <Tooltip.Root>
        <TooltipTrigger>27</TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent>
            27 de Abril - Disponível
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </TooltipBaloonContainer>
  )
}
