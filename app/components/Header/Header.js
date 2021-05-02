import React, { useState } from 'react'
import { Text, View, TouchableNativeFeedback, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const renderCancelButton = (searchValue) => {
  if (searchValue.length !== 0)
    return (
      <TouchableNativeFeedback onPress={() => props.navigation.goBack()}>
        <Text style={styles.cancelText}>
          Cancel
        </Text>
      </TouchableNativeFeedback>
    )
}

const renderBackButton = (searchValue) => {
  if (searchValue.length === 0)
    return (
      <TouchableNativeFeedback onPress={() => props.navigation.goBack()}>
        <Text style={styles.textBackButton}>
          ←
        </Text>
      </TouchableNativeFeedback>
    )
}

const Header = props => {
  const [searchValue, onChangeSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {renderBackButton(searchValue)}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.searchTextInput}
            onChangeText={onChangeSearchValue}
            value={searchValue}
          />
        </View>
        {renderCancelButton(searchValue)}
      </View>
    </View>
  )
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Header