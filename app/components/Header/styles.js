import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { Colors } from '~/common'

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(11.5),
    flexDirection: 'column-reverse',
    backgroundColor: Colors.WHITE
  },
  rowContainer: {
    flexDirection: 'row',
    marginLeft: wp(2),
    marginBottom: hp(1)
  },
  textBackButton: {
    fontSize: hp(3)
  },
  searchTextInput: {
    height: hp(5.5),
    borderRadius: 5,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.SILVER
  },
  cancelText: {
    color: Colors.RED,
    marginTop: hp(1.5),
    marginRight: wp(3),
    fontSize: hp(2.15)
  },
  textInputContainer: {
    flex: 1
  }
})

export default styles
