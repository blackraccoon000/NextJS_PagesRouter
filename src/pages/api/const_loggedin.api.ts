// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

type LoggedIn = {
  loggedIn: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoggedIn>
) {
  res.status(200).json({loggedIn: true});
}
