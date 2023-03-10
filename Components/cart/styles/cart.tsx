import tw from 'twin.macro'
import styled from 'styled-components';


export const CartDiv = styled.div`
  ${tw`
    fixed
    bottom-10
    right-10
    z-50
    h-16
    w-16
    flex
    justify-center
    items-center
    cursor-pointer
    rounded-full
    bg-gray-700
  `}
`;

export const IconSpan = styled.span`
  ${tw`
    absolute
    -right-2
    -top-2
    z-50
    h-7
    w-7
    flex
    justify-center
    items-center
    rounded-full
    bg-[#1C1C1C]
    text-white
  `}
`;