import tw from 'twin.macro'
import styled from 'styled-components';


export const Span1 = styled.span`
  ${tw`
    absolute
    bottom-0
    right-0
    -mb-8
    -mr-5
    h-20
    w-8
    translate-x-1
    rotate-45
    transform
    bg-white
    opacity-10
    transition-all
    duration-300
    ease-out
    group-hover:translate-x-0
  `}
`;

export const Span2 = styled.span`
  ${tw`
    absolute
    top-0
    left-0
    -mt-1
    -ml-12
    h-8
    w-20
    -translate-x-1
    -rotate-45
    transform
    bg-white
    opacity-10
    transition-all
    duration-300
    ease-out
    group-hover:translate-x-0
  `}
`;