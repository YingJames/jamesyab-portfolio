import { Navbar } from 'flowbite-react';
import Image from 'next/image';
export function Navigation() {
    return (
        <Navbar
        fluid={true}
        rounded={false}
        className="m-6 
          border-b border-black"
      >
        <a href="/">
          <Image src="logo.svg" alt="james yab logo" width={52} height={24} />
        </a>
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