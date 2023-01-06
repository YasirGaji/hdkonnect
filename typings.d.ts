interface Category {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: string
  slug: {
    _type: "slug"
    current: string

  }
  title: string
};

interface Image {
  _key: string
  _type: "image"
  asset: {
    url: string;
  }
}

interface Product {
  name: any
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: "product"
  title: string
  price: number
  slug: {
    _type: "slug"
    current: string
  }
  description: string
  category: {
    _ref: string
    _type: "reference"
  }
  image: Image[]
};

interface StripeProduct {
  id: string,
  amount_discount: number,
  amount_subtotal: number,
  amount_tax: number,
  amount_total: number,
  currency: string,
  description: string,
  object: string,
  quantity: number,
  price: {
    unit_amount: number,
  }
}