import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterEntityApi[];
}

const url = 'https://rickandmortyapi.com/api/character'; 

export const getCharacterCollection = () => {
  return axios.get<ApiResponse>(url).then(response => {
    const results = response.data.results;
    return results
  })
};