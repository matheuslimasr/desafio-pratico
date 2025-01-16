import { BASE_URL_MARK } from "../config/config";
import { MarkType } from "../screens/Home";

// Função para login
export const marksRequest = async (): Promise<MarkType[]> => {
  try {
    
    const response = await fetch(BASE_URL_MARK, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dataResponse: MarkType[] = await response.json();
    
    return dataResponse;
  } catch (error) {
    throw error; // Relança o erro para ser tratado onde a função for usada
  }
};