import type { StoryObj, Meta } from '@storybook/react'
import { TooltipBaloon, TooltipBaloonProps } from '@ignite-ui/react'

export default {
  title: 'Form/TooltipBaloon',
  component: TooltipBaloon,
  args: {},
  decorators: [
    (Story) => {
      return <TooltipBaloon />
    },
  ],
} as Meta<TooltipBaloonProps>

export const Primary: StoryObj<TooltipBaloonProps> = {}
