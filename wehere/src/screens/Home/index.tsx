import { useState } from 'react'
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Participant } from '../components/Participant'

import { styles } from './style'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [inputName, setInputName] = useState<string>('')

  function handleParticipantAdd() {
    if (participants.includes(inputName)) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome.'
      )
    }

    setParticipants((state) => [inputName, ...state])
    setInputName('')
    Keyboard.dismiss()
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants((state) => state.filter((row) => row !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
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
          value={inputName}
          onChangeText={setInputName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
          disabled={inputName.length < 4}
        >
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
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
