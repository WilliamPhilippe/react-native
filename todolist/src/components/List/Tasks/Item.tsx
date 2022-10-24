import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CircleSVG } from '../../../assets/icons/Circle'
import { MarkedCircle } from '../../../assets/icons/MarkedCircle'
import { TrashSVG } from '../../../assets/icons/Trash'
import { colors } from '../../../config/colors'
import { Task } from '../types'

interface IProps {
  task: Task
  onRemove: () => void
  onMark: () => void
}

export const Item = ({ task, onMark, onRemove }: IProps) => {
  const handleOnRemove = () => {
    Alert.alert('Excluir atividade?', 'Essa açāo nāo pode ser desfeita.', [
      { style: 'default', text: 'Voltar' },
      { style: 'destructive', text: 'Excluir', onPress: onRemove },
    ])
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onMark}
        style={
          !task.done
            ? { ...styles.unmarked, ...styles.touchContainer }
            : styles.touchContainer
        }
      >
        {task.done ? <MarkedCircle /> : <CircleSVG />}
      </TouchableOpacity>
      <Text style={styles.title}>{task.title}</Text>
      <TouchableOpacity style={styles.touchContainer} onPress={handleOnRemove}>
        <TrashSVG />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray500,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    paddingRight: 18,

    height: 64,

    borderRadius: 6,

    marginHorizontal: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.gray100,

    width: '80%',
  },
  unmarked: {},
  touchContainer: {
    width: 38,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
})
