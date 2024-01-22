import React from "react";
import { Image, Text, View } from "react-native";

const FeaturedCard = () => {
  return (
    <View className="w-[255px]   mr-4 ">
      <Image
        source={require("../../assets/deleteable/burgers.jpg")}
        className="w-[255px] h-[142px] rounded-lg"
      />
      <Text className="text-base font-medium">McDonald’s(Best Offer)</Text>
      <Text className="text-xs text-[#555]">
        $4.99 Delivery Fee . 15-30 min
      </Text>
    </View>
  );
};

export default FeaturedCard;
