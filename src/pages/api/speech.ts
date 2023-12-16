import { SpeechConfig, AudioConfig, SpeechRecognizer, ResultReason, CancellationReason } from 'microsoft-cognitiveservices-speech-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { audio } = req.body;

    try {
      console.log("in here");
      const audioBuffer = Buffer.from(audio, 'base64');
      const speechConfig = SpeechConfig.fromSubscription('YOUR_SPEECH_KEY', 'YOUR_REGION');
      speechConfig.speechRecognitionLanguage = 'en-US';

      const audioConfig = AudioConfig.fromAudioFileInput(audioBuffer);
      const speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

      speechRecognizer.recognized = (sender, event) => {
        if (event.result.reason === ResultReason.RecognizedSpeech) {
          res.status(200).json({ text: event.result.text });
        } else if (event.result.reason === ResultReason.NoMatch) {
          res.status(200).json({ error: 'No speech could be recognized' });
        }
      };

      await speechRecognizer.startContinuousRecognitionAsync();
    } catch (error) {
      console.error('Error processing audio:', error);
      res.status(500).json({ error: 'Error processing audio' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
