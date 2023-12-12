import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(express.json());

const openai = new OpenAI({
 apiKey: process.env.OPEN_API_KEY as string,
});

app.post('/chat', async (req: express.Request, res: express.Response) => {
 const prompt = req.body.prompt;
 const gptResponse = await openai.chat.completions.create({
  model: 'text-davinci-002',
  messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
  max_tokens: 60,
  temperature: 0.7,
 });

 res.send(gptResponse.choices[0].message.content);
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
