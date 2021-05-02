import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Header from '~/components/Header'

import Welcome from '~/screens/Welcome'
import SearchList from '~/screens/SearchList'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SearchList'
          component={SearchList}
          options={{
            headerMode: 'float',
            header: ({ navigation }) => <Header navigation={navigation} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
