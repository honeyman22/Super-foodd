import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const SidesItems = ({ item }: any) => {
  return (
    <View className="flex relative items-center bg-white w-full h-screen justify-center">
      <Image source={item?.source} className="object-contain h-[312] w-[312]" />
      <Text className="text-2xl mt-20 text-center font-semibold">
        {item?.title}
      </Text>
      <Text className="px-10 text-sm text-center mt-8">{item?.subtitle}</Text>
      {/* <Pressable
        onPress={() => console.log("ok")}
        className="absolute top-10 right-10"
      >
        <Text>Skip</Text>
      </Pressable> */}
    </View>
  );
};

export default SidesItems;
