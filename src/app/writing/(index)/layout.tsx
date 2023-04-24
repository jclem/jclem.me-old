import Link from 'next/link'
import {FC, PropsWithChildren} from 'react'
import {ProfilePic} from '~/components/profile-pic'
import {WritingLayoutBase} from '~/components/writing-layout-base'

export const WritingLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <WritingLayoutBase
      navLinks={
        <li>
          <Link href="/" className="text-inherit no-underline">
            <div className="flex items-center gap-2">
              <span>←️</span>
              <ProfilePic size="small" />
              <span>Jonathan Clem</span>
            </div>
          </Link>
        </li>
      }
    >
      {children}
    </WritingLayoutBase>
  )
}

export default WritingLayout
