import OpenAI from 'openai';

export const client = new OpenAI({
  apiKey: import.meta.env.OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});