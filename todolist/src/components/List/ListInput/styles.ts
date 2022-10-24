import { StyleSheet } from 'react-native'
import { colors } from '../../../config/colors'

export const styles = StyleSheet.create({
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: -32,
  },
  input: {
    height: 54,
    backgroundColor: colors.gray500,
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.gray100,
  },
  button: {
    height: 54,
    width: 54,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  buttonText: {
    fontSize: 16,
    color: colors.gray100,
    fontWeight: '800',
  },
})
