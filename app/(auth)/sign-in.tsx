import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-full bg-success px-4 py-2">
        <Text className="text-sm font-semibold text-white">Create Account</Text>
      </Link>
    </View>
  )
}

export default signIn