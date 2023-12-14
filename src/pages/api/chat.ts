import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method, body, query } = request;

  const prompt: string = method === "GET" ? query.prompt : body.prompt;
  console.log(method, prompt);

  const client = new OpenAIClient(
    "https://chachachaudary.openai.azure.com/",
    new AzureKeyCredential(process.env.AZOPENAI_API_KEY!),
  );
  const { id, created, choices, usage } = await client.getChatCompletions(
    "chacha",
    [
      {
        role: "system",
        content: "You are a helpful assistant nicknamed named Chachaji (actual name : Chacha Choudhary). Talk in Hindi (sometimes lyrically). Assume you are talking to 5 year old",
      },
      { role: "user", content: prompt },
    ],
  );

  console.log(id, created, choices, usage);
  response.status(200).json({
    messageT: choices[0].message?.content,
    data: {
      id: id,
      created: created,
      choices: choices,
      usage: usage,
    },
  });
};

export default handler;
