import { View, Text, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';


const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{ id: string }>();
    const router = useRouter();

  return (
    <View>
      <Text>Subscription Details</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}

export default SubscriptionDetails