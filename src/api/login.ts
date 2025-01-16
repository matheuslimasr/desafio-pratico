import { BASE_URL_LOGIN } from "../config/config";
import { User } from "../context/AuthContext";

// Função para login
export const loginRequest = async (user: string, password: string): Promise<{ user: User }> => {
  try {
    
    const response = await fetch(BASE_URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dataResponse: { user: User } = await response.json();
    
    return dataResponse;
  } catch (error) {
    throw error; // Relança o erro para ser tratado onde a função for usada
  }
};