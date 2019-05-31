import axios from "axios";

export interface MessageInput {
  body: string;
}

export interface Message {
  id: number;
  body: string;
}

function withTimestamp(data: any) {
  return Object.assign({}, data, {
    createdAt: data.createdAt || new Date(),
    updatedAt: new Date()
  });
}

export async function getAllMessages(): Promise<Message[]> {
  const res = await axios.get("/api/v1/messages");
  return res.data;
}

export async function sendMessage(message: MessageInput): Promise<Message> {
  const res = await axios.post("/api/v1/messages", withTimestamp(message));
  return res.data;
}
