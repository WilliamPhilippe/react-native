import { View } from 'react-native'
import { ToDoLogoSVG } from '../../assets/icons/ToDoLogo'
import { styles } from './styles'

export const Header = () => {
  return (
    <View style={styles.container}>
      <ToDoLogoSVG />
    </View>
  )
}
