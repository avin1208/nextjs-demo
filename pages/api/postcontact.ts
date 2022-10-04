import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request 
        let data = await fs.promises.readdir('contactdata');
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json(req)
    } else {
        res.status(200).json(["allBlogs"])
    }
}