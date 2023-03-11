import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw` 
  relative
  h-10
  w-10
  cursor-pointer
  opacity-75
  transition
  hover:opacity-100
  `}
`;

export const OuterDiv = styled.div`
  ${tw` 
  flex
  items-center
  justify-center
  md:w-1/5
  `}
`;

export const NavBar = styled.div`
  ${tw` 
  hidden
  flex-1
  items-center
  justify-center
  space-x-8
  md:flex
  `}
`;

export const Icons = styled.div`
  ${tw` 
  flex
  items-center
  justify-center
  gap-x-4
  md:w-1/5
  `}
`;

export const CountDiv = styled.div`
  ${tw` 
  relative 
  cursor-pointer
  `}
`;

export const CountSpan = styled.span`
  ${tw` 
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
  `}
`;

//https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80 

