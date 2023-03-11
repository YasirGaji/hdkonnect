import styled from "styled-components";
import tw from "twin.macro";


export const CapitalDiv = styled.div`
  ${tw` 
    flex
    flex-col
    gap-x-4
    border-b
    border-gray-200
    pb-5
    lg:flex-row
    lg:items-center
  `}
`;

export const ImageDiv = styled.div`
  ${tw` 
    relative
    h-44
    w-44
    mt-1.5
    -mb-2
  `}
`;

export const TextDiv = styled.div`
  ${tw` 
    flex
    flex-1
    items-end
    lg:items-center
  `}
`;

export const OutermostDiv = styled.div`
  ${tw` 
    flex-1
    space-y-4
  `}
`;

export const SubDiv = styled.div`
  ${tw` 
    flex
    flex-col
    gap-x-8
    text-xl
    lg:flex-row
    lg:text-2xl
  `}
`;

export const H4 = styled.h4`
  ${tw` 
    font-semibold
    lg:w-96
  `}
`;

export const ItemCount = styled.p`
  ${tw` 
    flex
    items-center
    gap-x-1
    font-semibold
  `}
`;

export const DetailsP = styled.p`
  ${tw` 
    flex 
    cursor-pointer 
    items-end 
    text-blue-500 
    hover:underline
  `};
`;

export const OutermostDiv2 = styled.div`
  ${tw` 
    flex
    flex-col
    items-end
    space-y-4
  `}
`;

export const CurrencyH4 = styled.h4`
  ${tw` 
    text-xl
    font-semibold
    lg:text-2xl
  `};
`;
