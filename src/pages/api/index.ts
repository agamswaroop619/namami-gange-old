// Import necessary modules
import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
app.use(express.json());

// Create an instance of the OpenAI class with the API key from environment variables
const openai = new OpenAI({
  apiKey: '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',
});

// Define the endpoint for handling chat requests
app.get('/chat', async (req: express.Request, res: express.Response) => {
  try {
    // Extract the prompt from the request body
    // const prompt = req.body.prompt;
    const prompt = req.query.q! as string 
    // Use the OpenAI GPT-3 API to generate a response
    const gptResponse = await openai.chat.completions.create({
      model: 'text-davinci-002',
      messages: [
        { role: 'system', content: 'You are Chachaji explaining about Namami Gange.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 60,
      temperature: 0.7,
    });

    // Log the GPT-3 response for debugging
    console.log('GPT-3 Response:', gptResponse);

    // Send the generated response back to the client
    res.send(gptResponse.choices[0].message.content);
  } catch (error) {
    // Handle errors and send an internal server error response
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define the port number for the server to listen on
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

default export app;