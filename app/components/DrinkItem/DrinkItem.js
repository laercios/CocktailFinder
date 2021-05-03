import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native'

import styles from './styles'

const DrinkItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.imageURL }}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>
          {props.name}
        </Text>
      </View>
    </View>
  )
}

DrinkItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default DrinkItem
