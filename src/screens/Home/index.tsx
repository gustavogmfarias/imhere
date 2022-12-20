import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Gustavo",
    "Rodrigo",
    "Andrea",
    "Angélica",
    "Ana",
    "isa",
    "Tiago",
    "Maurício",
    "João",
    "Fábio",
    "Marcos",
  ];

  function handleParticipantAdd() {
    console.log("clicou");
  }

  function handleParticipantRemove(name: string) {
    console.log("removeu");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
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
