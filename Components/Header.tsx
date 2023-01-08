import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'
import Link from 'next/link'
import { 
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cartSlice'
import { signIn, signOut, useSession } from 'next-auth/react'



function Header() {
  const session = false;
  const items = useSelector(selectCartItems)

  return (
    <header className='headerStyle'>
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

      <Icons>
        <SearchIcon className='headerIcon' />
        <Link href={'/checkout'}>
          <CountDiv>
            { items.length > 0 && (
              <CountSpan>
                {items.length}
              </CountSpan>
            )}
            
          </CountDiv>
          <ShoppingBagIcon className='headerIcon' />
        </Link>
        
        {session ? (
          <Image
            src = {
            //session.user?.image ||
              "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" 
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
           onClick={() => signOut()}
          />
        ) : (
          <UserIcon 
            className='headerIcon' 
            onClick={() => signIn()} 
          />
        )}

        
      </Icons>
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

const Icons = tw.div`
  flex
  items-center
  justify-center
  gap-x-4
  md:w-1/5
`;

const CountDiv = tw.div`
  relative 
  cursor-pointer
`;

const CountSpan = tw.span`
  absolute
  -right-1
  -top-1
  z-50
  flex
  h-4
  w-4
  items-center
  justify-center
  rounded-full
  bg-gradient-to-r
  from-blue-500
  to-red-500
  text-[10px]
  font-bold
  text-white
`;

//https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80 

