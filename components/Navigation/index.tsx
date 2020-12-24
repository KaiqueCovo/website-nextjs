import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import styles from './Navigation.module.css'

import Link from 'next/link'

const LINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

type typeNavAnchor = {
  path: string
  children: ReactNode
}

function NavAnchor ({path, children}: typeNavAnchor) {
  return (
    <Link href={path}>
      <a className={styles.navAnchor}>
        {children}
      </a>
    </Link>
  )
}

function Navigation() {
  const { pathname } = useRouter()
  return(
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ name, path }) =>  (
        <li key={path}>
          { path === pathname ? <span>{name}</span> : <NavAnchor path={path}>{name}</NavAnchor> }
        </li>
        ) )}
      </ul>
    </nav>
  )
}

export default Navigation