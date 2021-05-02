import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { Colors } from '~/common'

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(6.5),
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(10),
    marginLeft: wp(2)
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(70)
  },
  textLabel: {
    color: Colors.GRAY
  }
})

export default styles
