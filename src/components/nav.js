import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav className="flex p1">
      <ul className="flex flex-wrap">
        <li className="pr-3">
          <Link to="/">Home</Link>
        </li>
        <li className="pr-3">
          <Link to="/about">About Me</Link>
        </li>
        <li className="pr-3">
          <Link to="/rss.xml">RSS</Link>
        </li>
        <li className="pr-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mscottmoore.itch.io/reflector"
          >
            Itch.io
          </a>
        </li>
        <li className="pr-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mscottmoore/reflector"
          >
            GitHub
          </a>
        </li>
        <li className="pr-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mscottmooredev"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reflector-unstable.netlify.com"
          >
            Development Builds
          </a>
        </li>
      </ul>
    </nav>
  )
}
