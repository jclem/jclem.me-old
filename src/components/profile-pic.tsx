import {VariantProps, cva} from 'class-variance-authority'
import Image from 'next/image'
import {FC} from 'react'
import jclemImage from '~/public/images/jclem.webpp'

const className = cva(['rounded-full'], {
  variants: {
    size: {
      small: ['h-4 w-4'],
      large: ['h-12 w-12']
    }
  }
})

type Props = VariantProps<typeof className>

export const ProfilePic: FC<Props> = (props) => {
  return (
    <Image
      src={jclemImage}
      alt="Photograph of Jonathan Clem"
      className={className(props)}
    />
  )
}
