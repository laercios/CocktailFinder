import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'

import WelcomeLogo from '~/components/WelcomeLogo'
import WelcomeButton from '~/components/WelcomeButton'

import { Colors } from '~/common'
import styles from './styles'

const Welcome = props => {
  return (
    <LinearGradient
      colors={[Colors.RED, Colors.PINK]}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <WelcomeLogo
        name='CocktailFinder'
        emojiLogo='🍸'
      />
      <WelcomeButton
        label='Search your favorite cocktail'
        emojiIcon='🔍'
        onPress={() =>
          props.navigation.navigate('SearchList')}
      />
    </LinearGradient>
  )
}

Welcome.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Welcome
