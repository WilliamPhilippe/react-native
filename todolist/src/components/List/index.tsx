import { useState } from 'react'
import { View } from 'react-native'
import { ListInput } from './ListInput'
import { ListStatus } from './ListStatus'
import { Tasks } from './Tasks'
import { Task } from './types'

export const List = () => {
  const [inputTask, setInputTask] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddNewTask = () => {
    const newId = Math.floor(Math.random() * 100000)

    setTasks((state) => [
      { id: String(newId), title: inputTask, done: false },
      ...state,
    ])
    setInputTask('')
  }

  const handleRemoveTask = (id: string) => {
    setTasks((state) => state.filter((task) => task.id !== id))
  }

  const handleMark = (id: string) => {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          }
        } else return task
      })
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ListInput
        value={inputTask}
        setter={setInputTask}
        onAdd={handleAddNewTask}
      />
      <ListStatus
        done={tasks.filter((task) => task.done).length}
        created={tasks.length}
      />
      <Tasks
        tasks={tasks}
        handleMark={handleMark}
        handleRemoveTask={handleRemoveTask}
      />
    </View>
  )
}
