import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <OuterDiv>
        <Link href="/">
          <StyledDiv>
            <Image src="https://i.ibb.co/rd0nsrb/Untitled-design.jpg" objectFit="contain" layout="fill" alt="logo" />
          </StyledDiv>
        </Link>
      </OuterDiv>

      <NavBar>
        <a className='headerLink'>Products</a>
        <a className='headerLink'>Explore</a>
        <a className='headerLink'>Support</a>
        <a className='headerLink'>Business</a>
      </NavBar>
    </header>
  )
}

export default Header;

const StyledDiv = tw.div`
  relative
  h-10
  w-10
  cursor-pointer
  opacity-75
  transition
  hover:opacity-100
`;

const OuterDiv = tw.div`
  flex
  items-center
  justify-center
  md:w-1/5
`;

const NavBar = tw.div`
  hidden
  flex-1
  items-center
  justify-center
  space-x-8
  md:flex
`;

//https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80 

