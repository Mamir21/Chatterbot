import axios from 'axios';

export const queryLLaMA = async (query) => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        messages: [
          {
            role: 'user',
            content: query
          }
        ],
        model: 'llama3-8b-8192',
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        stream: false,  
        stop: null
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error querying LLaMA API');
  }
};
