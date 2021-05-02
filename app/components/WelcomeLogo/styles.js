import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { Colors } from '~/common'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconEmoji: {
    fontSize: wp(22),
    marginBottom: hp(1)
  },
  textName: {
    fontSize: wp(8),
    marginBottom: hp(2),
    color: Colors.WHITE
  }
})

export default styles
