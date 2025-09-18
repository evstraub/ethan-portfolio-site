'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">Ethan</Link>
        <nav>
          <ul className="nav-list">
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
