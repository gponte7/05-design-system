import type { StoryObj, Meta } from '@storybook/react'
import { ToastAlert, ToastAlertProps } from '@ignite-ui/react'

export default {
  title: 'Form/ToastAlert',
  component: ToastAlert,
  args: {},
  decorators: [
    (Story) => {
      return <ToastAlert />
    },
  ],
} as Meta<ToastAlertProps>

export const Primary: StoryObj<ToastAlertProps> = {}
