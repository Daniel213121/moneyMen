import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in">Already have an account?</Link>
    </View>
  )
}

export default signUp
