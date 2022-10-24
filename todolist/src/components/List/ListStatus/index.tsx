import { Text, View } from 'react-native'
import { colors } from '../../../config/colors'
import { styles } from './styles'

interface IProps {
  done: number
  created: number
}

export const ListStatus = ({ done, created }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={{ ...styles.countText, color: colors.blue }}>Criadas</Text>
        <View style={styles.countNumberContainer}>
          <Text style={styles.countNumberText}>{created}</Text>
        </View>
      </View>
      <View style={styles.countContainer}>
        <Text style={{ ...styles.countText, color: colors.purple }}>
          Concluídas
        </Text>
        <View style={styles.countNumberContainer}>
          <Text style={styles.countNumberText}>{done}</Text>
        </View>
      </View>
    </View>
  )
}
