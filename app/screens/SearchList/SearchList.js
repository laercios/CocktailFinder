import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ActivityIndicator, Text, View, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Colors } from '~/common'
import styles from './styles'

const renderDrinksList = (props) => {
  if (props.loading) {
    return (
      <ActivityIndicator
        size='large'
        color={Colors.WHITE}
      />
    )
  }
  if (props.data !== null && props.data.length !== 0) {
    return (
      <FlatList
        data={props.data}
        keyExtractor={({ idDrink }, index) => idDrink}
        renderItem={(drink) => {
          return (
            <View>
              <Text>
                {drink.item.strDrink}
              </Text>
            </View>
          )
        }}
      />
    )
  }
}

const SearchList = props => {
  return (
    <LinearGradient
      colors={[Colors.RED, Colors.PINK]}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {renderDrinksList(props)}
    </LinearGradient>
  )
}

SearchList.propTypes = {
  navigation: PropTypes.object.isRequired
}

const assignProps = (state) => state.getDrinks

export default connect(assignProps)(SearchList)
