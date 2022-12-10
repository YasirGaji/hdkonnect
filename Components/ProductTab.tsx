import React from 'react'
import { Tab } from '@headlessui/react'
import Product from './Product'

interface ProductProps {
  categories: Category[];
  products: Product[];
}

const ProductTab = ({ categories, products }: ProductProps) => {
  //console.log(categories);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => (
      <Product product={product} key={product._id} />
    )) // this function filters the products by category
  }

  return (
    <div>
    <Tab.Group>
      <Tab.List className='flex justify-center'>
        {categories.map((category) => (
          <Tab
            key={category._id}
            id={category._id}
            className={({ selected }) => `tabStyle1 rouded-t-lg ${
              selected
                ? 'borderGradient tabStyle2'
                : 'tabStyle3'
            }`}
          >
            {category.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="tabPanels">
        <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
        <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
        <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
        <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default ProductTab;


