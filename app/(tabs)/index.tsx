import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded-full bg-success px-4 py-2">
        <Text className="text-sm font-semibold text-white">Get Started</Text>
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-full bg-success px-4 py-2">
        <Text className="text-sm font-semibold text-white">Sign In</Text>
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-full bg-success px-4 py-2">
        <Text className="text-sm font-semibold text-white">Create Account</Text>
      </Link>

      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "spotify" } }}
        className="mt-4 rounded-full bg-success px-4 py-2"
      ></Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "Claude" } }}
      >
        <Text className="text-sm font-semibold text-white">View Subscription</Text>
      </Link>
    </View>
  );
}