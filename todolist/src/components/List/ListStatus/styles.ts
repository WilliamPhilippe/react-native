import { StyleSheet } from 'react-native'
import { colors } from '../../../config/colors'

export const styles = StyleSheet.create({
  container: {
    height: 60,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: colors.gray400,

    marginTop: 10,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  countNumberContainer: {
    backgroundColor: colors.gray400,
    height: 24,
    width: 24,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countNumberText: {
    color: colors.gray100,
    fontWeight: '700',
  },
})
