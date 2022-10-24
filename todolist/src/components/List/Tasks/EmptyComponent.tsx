import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/colors'

export const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.secondText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
  },
  mainText: {
    color: colors.gray200,
    fontWeight: '600',
    fontSize: 16,

    marginBottom: 4,
  },
  secondText: {
    color: colors.gray300,
  },
})
