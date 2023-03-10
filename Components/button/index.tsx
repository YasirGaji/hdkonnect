import React from 'react'
import { Span1, Span2 } from './styles/Button'

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
