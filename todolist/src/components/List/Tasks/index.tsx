import { FlatList, StyleSheet } from 'react-native'
import { Task } from '../types'
import { EmptyComponent } from './EmptyComponent'
import { Item } from './Item'

interface IProps {
  tasks: Task[]
  handleRemoveTask: (id: string) => void
  handleMark: (id: string) => void
}

export const Tasks = ({ tasks, handleMark, handleRemoveTask }: IProps) => {
  return (
    <FlatList
      style={styles.flatList}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Item
          key={item.id}
          task={item}
          onMark={() => handleMark(item.id)}
          onRemove={() => handleRemoveTask(item.id)}
        />
      )}
      ListEmptyComponent={<EmptyComponent />}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
  },
})
