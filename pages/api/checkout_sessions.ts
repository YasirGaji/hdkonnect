import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { urlFor } from '../../sanity'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const items: Product[] = req.body.items;

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "ngn",
        product_data: {
          name: item.name,
          images: [urlFor(item.image).url()!],
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    }
    )); //transform items to stripe format

    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["NG"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin!}/checkout`,
        metadata: {
          images: JSON.stringify(
            items.map((item) => item.image[0].asset.url)
          ),
        }
      }
    } catch (error) {

    }
  }
}