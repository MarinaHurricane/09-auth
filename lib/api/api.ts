import axios, { AxiosError} from "axios";
import type { Note } from "@/types/note";

// export const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export type ApiError = AxiosError<{ error: string }>;

export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
  withCredentials: true,
});

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type CheckSessionRequest = {
  success: boolean;
};

export interface createNoteProps {
  content: string;
  tag: string;
  title: string;
}

export interface fetchNotesResponseProps {
  notes: Note[];
  totalPages: number;
}

// axios.defaults.baseURL = "https://notehub-public.goit.study/api";

