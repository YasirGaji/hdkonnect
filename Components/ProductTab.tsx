import React from 'react'
import { Tab } from '@headlessui/react'

function ProductTab() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className='flex justify-center'>
          {categories.map((category) => (
            <Tab
              key={category.Id}
            >Tab 1</Tab>
          ))}
          
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default ProductTab