import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../config/colors'
import { styles } from './styles'

interface IProps {
  value: string
  setter: React.Dispatch<React.SetStateAction<string>>
  onAdd: () => void
}

export const ListInput = ({ onAdd, setter, value }: IProps) => {
  const handleOnPress = () => {
    onAdd()
    Keyboard.dismiss()
  }

  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
        value={value}
        onChangeText={setter}
      />
      <TouchableOpacity
        disabled={value.length < 4}
        style={styles.button}
        onPress={handleOnPress}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
