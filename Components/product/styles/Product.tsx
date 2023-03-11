import styled from "styled-components";
import tw from "twin.macro";

export const FirstDiv = styled.div`
  ${tw` 
  flex 
  h-fit
  w-[320px]
  select-none
  flex-col
  space-y-3
  rounded-xl
  bg-[#35383c]
  p-8
  md:h-[500px]
  md:w-[400px]
  md:p-10
  `}
`;

export const InnerDiv = styled.div`
  ${tw` 
  relative 
  w-full 
  h-64
  md:h-72
  `}
`;

export const InnerDiv2 = styled.div`
  ${tw` 
  flex
  flex-1
  justify-between
  space-x-3
  `}
`;

export const SubDiv = styled.div`
  ${tw` 
  space-y-2
  text-xl
  text-white
  md:text-2xl
  `}
`;

export const IconDiv = styled.div`
  ${tw` 
  flex
  h-16
  w-16
  cursor-pointer
  items-center
  justify-center
  rounded-full
  bg-gray-700
  md:h-[70px]
  md:w-[70px]
  `}
`;