import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "./auth.config";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getUser(req)

  if(!user) {
    return res.status(401).json({
      message: "Not authorized",
    })
  }

    return res.status(200).json({
      address: user.address
    })
}

export default handler