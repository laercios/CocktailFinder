import React, { useState } from 'react'
import { Text, View, TouchableNativeFeedback, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const renderCancelButton = (searchValue, props) => {
  if (searchValue.length !== 0) {
    return (
      <TouchableNativeFeedback onPress={() => props.navigation.goBack()}>
        <Text style={styles.cancelText}>
          Cancel
        </Text>
      </TouchableNativeFeedback>
    )
  }
}

const renderBackButton = (searchValue, props) => {
  if (searchValue.length === 0) {
    return (
      <TouchableNativeFeedback onPress={() => props.navigation.goBack()}>
        <Text style={styles.textBackButton}>
          ←
        </Text>
      </TouchableNativeFeedback>
    )
  }
}

const Header = props => {
  const [searchValue, onChangeSearchValue] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {renderBackButton(searchValue, props)}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.searchTextInput}
            onChangeText={onChangeSearchValue}
            value={searchValue}
          />
        </View>
        {renderCancelButton(searchValue, props)}
      </View>
    </View>
  )
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Header
