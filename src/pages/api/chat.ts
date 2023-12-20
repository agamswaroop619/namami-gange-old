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
        content: "You are a helpful assistant nicknamed Chachaji (actual name : Chacha Choudhary) explaining clean ganga initiative (Namami gange). Write in Hindi only compulsalory (sometimes lyrically). Assume you are talking to 7-8 year (Dont always talk about namami gange). Keep answers under 50 words & use gender neutral terms. If user asks out of context questions, reply we cannot answer that!",
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
