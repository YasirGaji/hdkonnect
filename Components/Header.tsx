import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'

function Header() {
  return (
    <header>
      <StyledDiv>
        <Image src="https://i.ibb.co/hVC5zgW/hdkonnect.jpg" objectFit="contain" layout="fill" alt="logo" />
      </StyledDiv>
    </header>
  )
}

export default Header;

const StyledDiv = tw.div`
  
`;

//https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80 

