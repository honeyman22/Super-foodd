import React from "react";
import { Image, Text, View } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/MaterialIcons";
const ReviewCard = () => {
  return (
    <View className="w-full flex flex-row space-x-2 items-start">
      <Image
        source={require("../../assets/deleteable/venom.jpg")}
        className="w-12 h-12 rounded-full object-cover"
      />
      <View className="w-[85%]">
        <View className="flex flex-row items-center justify-between  h-12">
          <Text className="text-base font-medium">Nishan Bhattarai</Text>
          <View className="flex flex-row">
            <Icon name="star" color="#FDB600" />
            <Icon name="star" color="#FDB600" />
            <Icon name="star" color="#FDB600" />
            <Icon name="star" color="#FDB600" />
          </View>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatem, unde harum alias dolores odio aut ullam in quibusdam ipsum
          quo excepturi id consequuntur laboriosam, ratione velit fuga ad
          nostrum?
        </Text>
        <Text className="mt-3 text-gray-500">10.02.2020</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
