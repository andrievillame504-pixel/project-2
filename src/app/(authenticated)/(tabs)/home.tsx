import { FlatList, Image, Pressable, Text, View } from "react-native";

type Post = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  time: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
};

const POSTS: Post[] = [
  {
    id: "1",
    name: "Maria Santos",
    username: "mariasantos",
    avatar: "https://i.pravatar.cc/150?img=47",
    time: "2h",
    text: "Sunrise hike this morning. Totally worth waking up at 4 AM.",
    image: "https://picsum.photos/seed/hike/800/600",
    likes: 128,
    comments: 14,
  },
  {
    id: "2",
    name: "Jun Reyes",
    username: "junreyes",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "5h",
    text: "Finally finished my first React Native screen. Small win, but it feels great!",
    likes: 56,
    comments: 9,
  },
  {
    id: "3",
    name: "Ana Cruz",
    username: "anacruz",
    avatar: "https://i.pravatar.cc/150?img=32",
    time: "1d",
    text: "Lunch with the whole class today. Who else is ready for the weekend?",
    image: "https://picsum.photos/seed/lunch/800/600",
    likes: 203,
    comments: 31,
  },
  {
    id: "4",
    name: "Paolo Dizon",
    username: "paolodizon",
    avatar: "https://i.pravatar.cc/150?img=15",
    time: "2d",
    text: "Rainy day, good coffee, and a long to-do list.",
    image: "https://picsum.photos/seed/coffee/800/600",
    likes: 87,
    comments: 6,
  },
];

function PostCard({ post }: { post: Post }) {
  return (
    <View className="bg-white rounded-[20px] p-4 border border-[#E6E3FA]">
      <View className="flex-row items-center mb-3">
        <Image
          source={{ uri: post.avatar }}
          className="w-[46px] h-[46px] rounded-full mr-3 bg-[#E6E3FA]"
        />
        <View className="flex-1">
          <Text className="text-base font-bold text-[#1B1840]">
            {post.name}
          </Text>
          <Text className="text-[13px] text-[#6E6A8F] mt-0.5">
            @{post.username} • {post.time}
          </Text>
        </View>
      </View>

      <Text className="text-base leading-[23px] text-[#1B1840]">
        {post.text}
      </Text>

      {post.image && (
        <Image
          source={{ uri: post.image }}
          className="w-full aspect-[4/3] rounded-[14px] mt-3 bg-[#E6E3FA]"
        />
      )}

      <View className="flex-row gap-2 mt-3.5 pt-3 border-t border-[#E6E3FA]">
        <Pressable className="py-1.5 px-3 rounded-full bg-[#F6F5FB]">
          <Text className="text-sm font-semibold text-[#6E6A8F]">
            ♡ {post.likes}
          </Text>
        </Pressable>
        <Pressable className="py-1.5 px-3 rounded-full bg-[#F6F5FB]">
          <Text className="text-sm font-semibold text-[#6E6A8F]">
            💬 {post.comments}
          </Text>
        </Pressable>
        <Pressable className="py-1.5 px-3 rounded-full bg-[#F6F5FB]">
          <Text className="text-sm font-semibold text-[#6E6A8F]">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <FlatList
      className="bg-[#F6F5FB]"
      contentContainerClassName="p-4 pt-14 pb-8 gap-4"
      data={POSTS}
      keyExtractor={(p) => p.id}
      renderItem={({ item }) => <PostCard post={item} />}
      ListHeaderComponent={
        <Text className="text-3xl font-extrabold text-[#1B1840] mb-1">
          Home
        </Text>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
