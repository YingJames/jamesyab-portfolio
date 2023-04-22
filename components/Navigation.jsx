import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navigation() {
    return (
        <Navbar
        fluid={false}
        rounded={false}
        className="mb-6
          border-b border-gray-800
          font-sans
          
          "
      >
        <Link href="/">
          <Image src="logo.svg" alt="james yab logo" width={52} height={24} />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/#work"
            active={false}
            className="navbar--hover"
          >
            work
          </Navbar.Link>
          <Navbar.Link href="/#about" className="navbar--hover">
            about
          </Navbar.Link>
          <Navbar.Link href="/contact" className="navbar--hover">
            contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

    )
}