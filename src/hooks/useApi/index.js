// ANCHOR Imports
import useAxios from "../useAxios";

// ANCHOR Hook
// Hook criado para consumir os dados da API dinamicamente
export default function UseApi() {
  // URL que será gerada dinamicamente
  const url = ``;

  // Consumindo dados da API
  const response = useAxios(url);
  return response;
}
