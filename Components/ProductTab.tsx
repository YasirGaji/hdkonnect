import React from 'react'
import { Tab } from '@headlessui/react'
import { fetchCategories } from '../utils/fetchCategories';
import { GetServerSideProps } from 'next';

interface Props {
  categories: Category[];
}

function ProductTab() {
  return (
    <div>
    {/* <Tab.Group>
      <Tab.List className='flex justify-center'>
        {categories.map((category) => (
          <Tab
            key={category.id}
            id={category.id}
            className={({ selected }) => `tabStyle1 ${
              selected
                ? 'tabStyle2'
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
    </Tab.Group> */}
      Tabs
    </div>
  )
}

export default ProductTab;

// BACKEND CODE

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()

  return {
    props: {
      categories,
    },
  }
}