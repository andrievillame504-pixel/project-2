import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F6F5FB]"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center p-7"
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-14 h-14 rounded-2xl bg-[#4B3FE0] items-center justify-center mb-7">
          <Text className="text-white text-3xl font-extrabold">k</Text>
        </View>

        <Text className="text-3xl font-extrabold text-[#1B1840]">
          Welcome back
        </Text>
        <Text className="text-base text-[#6E6A8F] mt-1.5 mb-8">
          Log in to see what your friends posted.
        </Text>

        <Text className="text-sm font-semibold text-[#1B1840] mb-2">Email</Text>
        <TextInput
          className="bg-white border-[1.5px] border-[#E6E3FA] rounded-[14px] px-4 py-3.5 text-base text-[#1B1840] mb-4"
          placeholder="you@example.com"
          placeholderTextColor="#6E6A8F"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text className="text-sm font-semibold text-[#1B1840] mb-2">
          Password
        </Text>
        <TextInput
          className="bg-white border-[1.5px] border-[#E6E3FA] rounded-[14px] px-4 py-3.5 text-base text-[#1B1840] mb-4"
          placeholder="Your password"
          placeholderTextColor="#6E6A8F"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          className="bg-[#4B3FE0] rounded-full py-4 items-center mt-2 active:opacity-80"
          onPress={() => {
            if (!email || !password) {
              Alert.alert(
                "Missing info",
                "Please enter your email and password.",
              );
              return;
            }
            router.replace("/home");
          }}
        >
          <Text className="text-white text-[17px] font-bold">Log in</Text>
        </Pressable>

        <View className="flex-row justify-center mt-7">
          <Text className="text-[15px] text-[#6E6A8F]">New here? </Text>
          <Link href="/register" asChild>
            <Text className="text-[15px] font-bold text-[#4B3FE0]">
              Create an account
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
