import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: 'YOUR_API_KEY',
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Your logic here using openai or other functionalities
      const result = { message: 'Hello from Next.js API' };

      // Send JSON response
      res.status(200).json(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
