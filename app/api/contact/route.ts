import { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest) {
    if (req.method === "POST") {
        const { name, email, subject, message } = req.body;
        console.log(name, email, message);
        return new Response("success", {
            status: 200,
        });
    } else {
        return new Response("error", {
            status: 405,
        });
    }
}
export { handler as POST };
