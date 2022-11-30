import React from 'react'
import tw from 'twin.macro'

interface ButtonProps {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

function Button({ title, onClick, width, loading, padding, noIcon }: ButtonProps) {
  return (
    <button
      className={`ease group relative z-30 box-border inline-flex ${width ? width : "w-auto"} ${padding} groupEase`} onClick={onClick}
    >  
      <Span1></Span1>
  
      <Span2></Span2>

      <span className='span3'>
        {noIcon && (
          <svg
            className='svgIcon'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3l4 14h7v7l9-11h-7z'
            >
            </path>
          </svg>
        )}
        {loading ? "Loading..." : title}
      </span>
    </button>
  )
}

export default Button;


const Span1 = tw.span`
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
`;

const Span2 = tw.span`
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
`;