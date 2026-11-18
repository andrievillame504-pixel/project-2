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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();
  const inputClass =
    "bg-white border-[1.5px] border-[#E6E3FA] rounded-[14px] px-4 py-3.5 text-base text-[#1B1840] mb-4";
  const labelClass = "text-sm font-semibold text-[#1B1840] mb-2";

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
          Create your account
        </Text>
        <Text className="text-base text-[#6E6A8F] mt-1.5 mb-7">
          It takes less than a minute.
        </Text>

        <Text className={labelClass}>Name</Text>
        <TextInput
          className={inputClass}
          placeholder="Your full name"
          placeholderTextColor="#6E6A8F"
          value={name}
          onChangeText={setName}
        />

        <Text className={labelClass}>Email</Text>
        <TextInput
          className={inputClass}
          placeholder="you@example.com"
          placeholderTextColor="#6E6A8F"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text className={labelClass}>Password</Text>
        <TextInput
          className={inputClass}
          placeholder="At least 8 characters"
          placeholderTextColor="#6E6A8F"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text className={labelClass}>Confirm password</Text>
        <TextInput
          className={inputClass}
          placeholder="Type your password again"
          placeholderTextColor="#6E6A8F"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <Pressable
          className="bg-[#4B3FE0] rounded-full py-4 items-center mt-2 active:opacity-80"
          onPress={() => {
            if (!name || !email || !password || !confirm) {
              Alert.alert("Missing info", "Please fill in all fields.");
              return;
            }
            if (password !== confirm) {
              Alert.alert(
                "Password mismatch",
                "Please ensure your passwords match.",
              );
              return;
            }
            router.replace("/login");
          }}
        >
          <Text className="text-white text-[17px] font-bold">Register</Text>
        </Pressable>

        <View className="flex-row justify-center mt-7">
          <Text className="text-[15px] text-[#6E6A8F]">
            Already have an account?{" "}
          </Text>
          <Link href="/login" asChild>
            <Text className="text-[15px] font-bold text-[#4B3FE0]">Log in</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
