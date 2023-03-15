import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, Avatarimage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof Avatarimage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <Avatarimage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
