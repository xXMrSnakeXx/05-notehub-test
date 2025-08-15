import axios from 'axios';
import { Note } from '../types/note';

export interface FetchNotesResponse {
  data: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

const API_URL = 'https://notehub-public.goit.study/api/notes';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export const fetchNotes = async ({
  page = 1,
  perPage = 12,
  search = '',
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await axiosInstance.get('', { params: { page, perPage, search } });
  return response.data;
};

export const createNote = async (note: Omit<Note, '_id'>): Promise<Note> => {
  const response = await axiosInstance.post('', note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<{ _id: string }> => {
  const response = await axiosInstance.delete(`/${id}`);
  return response.data;
};

