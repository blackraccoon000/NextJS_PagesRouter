// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

type LoggedIn = {
  loggedIn: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoggedIn>
) {
  const loggedIn = Math.random() < 0.5;
  res.status(200).json({loggedIn});
}
