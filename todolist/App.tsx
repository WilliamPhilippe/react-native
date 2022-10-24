import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { colors } from './src/config/colors'

import { Header } from './src/components/Header'
import { List } from './src/components/List'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={{ backgroundColor: colors.gray700, flex: 1 }}>
        <View style={styles.header}>
          <SafeAreaView style={{ flex: 1 }}>
            <Header />
          </SafeAreaView>
        </View>
        <View style={styles.content}>
          <List />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.gray700,
    width: '100%',
    height: '25%',
  },
  content: {
    backgroundColor: colors.gray600,
    width: '100%',
    height: '75%',
  },
})
