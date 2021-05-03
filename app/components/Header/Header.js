import React, { useState, useEffect } from 'react'
import { Text, View, TouchableNativeFeedback, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getDrinks, resetDrinks } from '~/redux/actions'

import styles from './styles'

const renderCancelButton = (searchValue, props) => {
  if (searchValue.length !== 0) {
    return (
      <TouchableNativeFeedback onPress={() => {
        props.resetDrinks()
        props.navigation.goBack()
      }}
      >
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
      <TouchableNativeFeedback onPress={() => {
        props.resetDrinks()
        props.navigation.goBack()
      }}
      >
        <Text style={styles.textBackButton}>
          ←
        </Text>
      </TouchableNativeFeedback>
    )
  }
}

const Header = props => {
  const [searchValue, onChangeSearchValue] = useState('')
  const [previousSearchValue, onChangePreviousSearchValue] = useState('')

  useEffect(() => {
    if (searchValue.length >= 3 && searchValue !== previousSearchValue) {
      props.getDrinks(searchValue)
    }
    onChangePreviousSearchValue(searchValue)
  })

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {renderBackButton(searchValue, props)}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.searchTextInput}
            onChangeText={onChangeSearchValue}
            value={searchValue}
            placeholder='🔍 Search'
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

const assignProps = (state) => state.drinks

export default connect(assignProps, { getDrinks, resetDrinks })(Header)
