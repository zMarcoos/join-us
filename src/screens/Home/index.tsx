import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleParticipantAdd() {
    const name = participantName.trim();
    if (!name) {
      return Alert.alert("Nome inválido", "Digite um nome válido para o seu usuário!");
    }

    if (participants.includes(name)) {
      return Alert.alert("Participante existente!", "Este participante já existe!");
    }

    setParticipants((oldState) => [...oldState, name]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Você realmente deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Usuário deletado!", `Usuário ${name} deletado com sucesso!`);
          setParticipants((oldState) => oldState.filter(participantName => participantName !== name));
        },
      },
      {
        text: "Não",
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento dos amigos</Text>
      <Text style={styles.eventDate}>Domingo, 16 de Março de 2025</Text>

      <View style={styles.form}>
        <TextInput
          onChangeText={setParticipantName}
          placeholder='Digite um participante...'
          placeholderTextColor="#6B6B6B"
          style={styles.input}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participantName) => participantName}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}