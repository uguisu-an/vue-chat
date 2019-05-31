import axios from "axios";

export interface Message {
  id: number;
  body: string;
}

export async function getAllMessages(): Promise<Message[]> {
  const res = await axios.get("/api/v1/messages");
  return res.data;
}
