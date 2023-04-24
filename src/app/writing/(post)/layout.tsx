import Link from 'next/link'
import {FC, PropsWithChildren} from 'react'
import {ProfilePic} from '~/components/profile-pic'
import {WritingLayoutBase} from '~/components/writing-layout-base'

const PostLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <WritingLayoutBase
      navLinks={
        <>
          <li>
            <Link href="/writing" className="text-inherit no-underline">
              ← Writing Archive
            </Link>
          </li>

          <li>
            <Link href="/" className="text-inherit no-underline">
              <div className="flex items-center gap-2">
                <ProfilePic size="small" />
                <span>Jonathan Clem</span>
              </div>
            </Link>
          </li>
        </>
      }
    >
      {children}
    </WritingLayoutBase>
  )
}

export default PostLayout
