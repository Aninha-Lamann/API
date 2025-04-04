const API_URL = 'http://localhost:3001';

export const getCharacters = async () => {
  try {
    const response = await fetch(`${API_URL}/personagens`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar essas caracteristicas:', error);
    return [];
  }
};

export const getCharacterDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/personagens/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao pesquisar detalhes do seu personagem:', error);
    return null;
  }
};