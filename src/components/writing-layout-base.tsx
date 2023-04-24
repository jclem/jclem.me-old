import {FC, PropsWithChildren, ReactElement} from 'react'

interface Props {
  navLinks: ReactElement
}

export const WritingLayoutBase: FC<PropsWithChildren<Props>> = ({
  navLinks,
  children
}) => {
  return (
    <div className="flex flex-col items-start gap-8">
      <nav className="w-full font-mono">
        <ul className="flex justify-between">{navLinks}</ul>
      </nav>

      <main className="w-full">{children}</main>
    </div>
  )
}
