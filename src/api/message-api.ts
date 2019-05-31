import axios from "axios";

export interface MessageInput {
  body: string;
}

export interface Message {
  id: number;
  body: string;
}

export async function getAllMessages(): Promise<Message[]> {
  const res = await axios.get("/api/v1/messages");
  return res.data;
}

export async function sendMessage(message: MessageInput): Promise<Message> {
  const res = await axios.post("/api/v1/messages", message);
  return res.data;
}
