import { BASE_URL_MARK } from "../config/config";
import { ModelType } from "../screens/Model";

export interface ModelI {
  modelos: ModelType[]
}

// Função para login
export const modelsRequest = async (codigo): Promise<ModelI> => {
  try {
    
    const response = await fetch(`${BASE_URL_MARK}/${codigo}/modelos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dataResponse: ModelI = await response.json();

    return dataResponse;
  } catch (error) {
    throw error; // Relança o erro para ser tratado onde a função for usada
  }
};