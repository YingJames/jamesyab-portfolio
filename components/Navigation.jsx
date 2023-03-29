import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
export function Navigation() {
    return (
        <Navbar
        fluid={true}
        rounded={false}
        className="m-6 
          border-b border-black"
      >
        <Link href="/">
          <Image src="logo.svg" alt="james yab logo" width={52} height={24} />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about"
          >
            About
          </Navbar.Link>
          <Navbar.Link href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>



    )
}