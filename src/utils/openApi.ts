import OpenAI from 'openai';

export const client = new OpenAI({
  apiKey: `${import.meta.env.VITE_OPEN_API_TOKEN}`,
  dangerouslyAllowBrowser: true,
});