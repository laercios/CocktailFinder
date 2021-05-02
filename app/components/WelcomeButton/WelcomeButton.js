import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableNativeFeedback } from 'react-native'

import styles from './styles'

const WelcomeButton = props => {
  return (
    <TouchableNativeFeedback
      onPress={() => { props.onPress() }}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text>{props.emojiIcon}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>{props.label}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

WelcomeButton.propTypes = {
  label: PropTypes.string.isRequired,
  emojiIcon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default WelcomeButton
