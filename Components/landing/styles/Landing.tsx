import styled from "styled-components";
import tw from "twin.macro";

export const TextDiv = styled.div`
  ${tw` 
  space-y-8
  `} 
`;

export const PoweredSpan = styled.span`
  ${tw` 
  block
  bg-clip-text
  text-transparent
  `}
`;

export const WordSpan = styled.span`
  ${tw` 
  block
  `}
`;

export const H1 = styled.h1`
  ${tw` 
  space-y-3 
  text-5xl
  font-semibold
  tracking-wide
  lg:text-6xl
  xl:text-7xl
  `}
`;

export const ImageDiv = styled.div`
  ${tw` 
  relative
  hidden
  h-[450px]
  w-[450px]
  transition-all
  duration-500
  md:inline
  lg:h-[650px]
  lg:w-[600px]
  `}
`;

