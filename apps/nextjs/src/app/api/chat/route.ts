import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { generateText, streamText } from 'ai';
import { NextResponse } from 'next/server';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;


const url = "https://fesipopapi.onrender.com/"

async function getDataFromAPI() {
  const response = await fetch(`${url}/evenements`);
  const data = await response.json();
  return data;
}

async function getAddressFromCoordinates(lat: number, lon: number): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.display_name || "Address not found";
}

export async function POST(req: Request) {
  // Parse the incoming request body
  const { context, messages, latitude, longitude } = await req.json();

  // Get the address from coordinates
  const userAddress = await getAddressFromCoordinates(latitude, longitude);
  const events = await getDataFromAPI()
  const formatedEvents = events.map((event) => {
    return {
      artiste: event.artiste,
      nom_evenement: event.nom_evenement,
      lieu: event.lieu,
      latitude: event.latitude,
      longitude: event.longitude,
      type: event.type,
    }
  })

  console.log("events", events)

  // Construct the prompt
  const prompt = `You are Katsuka, a helpful assistant for a Festival named Fesi'Pop (similar to KCON).

  events: ${JSON.stringify(formatedEvents)}
  
  user: {
    "context": "${context}",
    "previousMessages": ${JSON.stringify(messages)},
    "lastMessage": ${messages[messages.length - 1].content},
    "address": "${userAddress}",
    "latitude": ${latitude},
    "longitude": ${longitude}
  }

  Restrictions:
  - The answer should be in plain text (no markdown, no HTML, etc.).
  - The answer should be concise and informative.
  - The answer should be in the same language as the user's message.
  - In case you don't know the answer, you can respond with "I don't know the answer to that question, contact info@fesipop.io for more information."
  - Your tone should be Kawai and friendly.
  - Add emojis and chinese characters to make the conversation more engaging.
  
  Verify you answered with plain text and by following restrictions.

  Assistant:`;

  console.log("prompt", prompt)

  // Call the language model
  const { text } = await generateText({
    // model: google('gemini-1.5-pro-latest'),
    model: openai('gpt-4o-mini'),
    prompt: prompt,
  });

  // const text = "Hello, I am Bobby, a helpful assistant for a Festival named Fesi'Pop. I am here to help you with any questions you may have. Please let me know how I can assist you today."

  console.log("text", text)

  // Respond with the stream
  return NextResponse.json({
    data: {
      content: text,
      refusal: null,
      role: 'assistant',
    }
  });
}