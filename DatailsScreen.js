import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getCharacterDetails } from '../services/api';

const DetailsScreen = ({ route }) => {
  const [character, setCharacter] = useState(null);
  const { characterId } = route.params;

  useEffect(() => {
    const loadCharacter = async () => {
      const data = await getCharacterDetails(characterId);
      setCharacter(data);
    };
    loadCharacter();
  }, [characterId]);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: character.imagem || 'https://via.placeholder.com/300' }} 
        style={styles.characterImage}
      />
      <Text style={styles.name}>{character.nome}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Classificação:</Text>
        {character.classificação.map((item, index) => (
          <Text key={index} style={styles.classification}>• {item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  characterImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  classification: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
    color: '#555',
  },
});

export default DetailsScreen;