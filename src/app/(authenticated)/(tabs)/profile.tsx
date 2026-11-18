import { Image, Pressable, ScrollView, Text, View } from "react-native";

const USER = {
  name: "Jhuana Antaboc",
  username: "Jowana",
  avatar: "https://i.pravatar.cc/300?img=5",
  bio: "Living my best life with my handsome boyfriend. He's my favorite person and I love him more every day. 💕",
  posts: 56,
  followers: "500K",
  following: 1,
  details: [
    { label: "Email", value: "jhuana.antaboc@gmail.com" },
    { label: "Phone", value: "+63 917 123 4567" },
    { label: "Location", value: "Imbatug, Baungon, Bukidnon, Philippines" },
    { label: "Birthday", value: "August 23, 2003" },
  ],
};
export default function Profile() {
  const stats = [
    { label: "Posts", value: USER.posts },
    { label: "Followers", value: USER.followers },
    { label: "Following", value: USER.following },
  ];

  return (
    <ScrollView
      className="bg-[#F6F5FB]"
      contentContainerClassName="pb-10"
      showsVerticalScrollIndicator={false}
    >
      <View className="h-[140px] bg-[#4B3FE0]" />

      <View className="items-center px-6 -mt-[52px]">
        <Image
          source={require("../../../../assets/me.jpg")}

          className="w-[104px] h-[104px] rounded-full border-4 border-[#F6F5FB] bg-[#E6E3FA]"
        />
        <Text className="text-2xl font-extrabold text-[#1B1840] mt-3">
          {USER.name}
        </Text>
        <Text className="text-[15px] text-[#6E6A8F] mt-0.5">
          @{USER.username}
        </Text>
        <Text className="text-[15px] leading-[22px] text-[#1B1840] text-center mt-3">
          {USER.bio}
        </Text>

        <Pressable
          className="bg-[#4B3FE0] rounded-full py-3 px-8 mt-[18px] active:opacity-80"
          onPress={() => {}}
        >
          <Text className="text-white text-base font-bold">Edit profile</Text>
        </Pressable>
      </View>

      <View className="flex-row justify-around mx-4 mt-6 py-4 bg-white rounded-[20px] border border-[#E6E3FA]">
        {stats.map((s) => (
          <View key={s.label} className="items-center">
            <Text className="text-xl font-extrabold text-[#1B1840]">
              {s.value}
            </Text>
            <Text className="text-[13px] text-[#6E6A8F] mt-0.5">{s.label}</Text>
          </View>
        ))}
      </View>

      <View className="mx-4 mt-4 p-[18px] bg-white rounded-[20px] border border-[#E6E3FA]">
        <Text className="text-[17px] font-bold text-[#1B1840] mb-1.5">
          Personal details
        </Text>
        {USER.details.map((d, i) => (
          <View
            key={d.label}
            className={`flex-row justify-between py-3 ${
              i === USER.details.length - 1 ? "" : "border-b border-[#E6E3FA]"
            }`}
          >
            <Text className="text-sm text-[#6E6A8F]">{d.label}</Text>
            <Text className="text-sm font-semibold text-[#1B1840] shrink text-right">
              {d.value}
            </Text>
          </View>
        ))}
      </View>

      <Text className="text-center text-xs text-[#6E6A8F] mt-6">
        © 2026 Einan Andrie Mamenting. All rights reserved.
      </Text>
    </ScrollView>
  );
}
