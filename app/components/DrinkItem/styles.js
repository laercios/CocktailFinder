import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { Colors } from '~/common'

const styles = StyleSheet.create({
  container: {
    width: wp(98),
    height: hp(15),
    borderRadius: 7,
    marginVertical: hp(1),
    flexDirection: 'row',
    backgroundColor: Colors.WHITE
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(2)
  },
  nameText: {
    fontSize: hp(3)
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(2)
  },
  image: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20) / 2
  }
})

export default styles
