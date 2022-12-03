// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';


const query = groq`*[_type == "category"] {
  _id,
   ...
}`; // getting back the categories, as well as every other field except the ID

type Data = {
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(query);
  console.log(categories);

  res.status(200).json({ categories });
}