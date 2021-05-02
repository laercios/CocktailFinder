import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import styles from './styles'

const WelcomeLogo = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.iconEmoji}>{props.emojiLogo}</Text>
      <Text style={styles.textName}>{props.name}</Text>
    </View>
  )
}

WelcomeLogo.propTypes = {
  name: PropTypes.string,
  emojiLogo: PropTypes.string
}

export default WelcomeLogo
