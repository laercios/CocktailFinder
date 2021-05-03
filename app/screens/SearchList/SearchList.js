import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Colors } from '~/common'
import styles from './styles'

const SearchList = props => {
  return (
    <LinearGradient
      colors={[Colors.RED, Colors.PINK]}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Text>Search List Screen</Text>
    </LinearGradient>
  )
}

SearchList.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SearchList
