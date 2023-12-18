import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;

  const baseUrl = "https://newsdata.io/api/1/news";
  const params = new URLSearchParams();
  params.append("apikey", process.env.NEWSDATA_API_KEY!);
  params.append("q", "(namami AND gange) OR ganga");
  params.append("country", "in,bd,np");
  params.append("timezone", "Asia/Kolkata");

  const url = `${baseUrl}?${params.toString()}`;
  fetch(url)
    .then(async (res) => {
      console.log(await res.json());
      return res.json();
    })
    .then((json) =>
      response.status(200).json({
        status: json["success"],
        totalResults: json["totalResults"],
        results: json["results"],
      }),
    );
};

export default handler;
