// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  flavor: string;
};

const flavors = [
  "Have a duck 🦆",
  "Have a bird 🐓",
  "Have a cat 🐈",
  "Have a fantastic day ahead.",
  `Battery currently at ${Math.floor(Math.random() * 100)}%.`,
  `It's currently ${Math.floor(Math.random() * 100)} degrees outside.`,
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({ flavor: flavors[Math.floor(Math.random() * flavors.length)] });
}
