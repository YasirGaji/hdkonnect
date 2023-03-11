import React from 'react'
import Image from 'next/image'
import { urlFor } from '../.././sanity'
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToCart } from '../.././redux/cartSlice';
import { toast } from 'react-hot-toast'
import { FirstDiv, InnerDiv, InnerDiv2, IconDiv, SubDiv } from './styles/Product';

interface Props {
  product: Product;
}



function Product({product} : Props) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));

    toast.success(`${product.title} added to cart`, {
      position: 'top-center',
    });
  };

  return (
    <FirstDiv>
      <InnerDiv>
        <Image 
          src={urlFor(product.image[0]).url()} 
          alt={'Product Image'}
          layout="fill"
          objectFit="contain"
        />
      </InnerDiv>

      <InnerDiv2>
        <SubDiv>
          <p>{product.title}</p>
          <p>₦ {product.price}</p>
        </SubDiv>

        <IconDiv className='flex-shrink-0' onClick={addItemToCart}>
          <ShoppingCartIcon className='h-8 w-8 text-white' />
        </IconDiv>
      </InnerDiv2>
    </FirstDiv>
  )
}

export default Product;