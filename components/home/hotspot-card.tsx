import React from "react";
import { Image, Text, View } from "react-native";

const HotSpotCard = () => {
  return (
    <View className="w-[150px] flex items-center justify-center relative ml-1  mr-3 ">
      <Image
        source={require("../../assets/deleteable/burger.png")}
        className="w-[142px] h-[112px] z-50 rounded-lg object-contain"
      />
      <View className="bg-white abolute bottom-12 z-0 rounded-lg  flex items-center justify-center w-[160px] h-[132px]">
        <Text className="text-base font-medium">Mc Double</Text>
        <Text className="text-base font-medium text-[#555]">$20.99</Text>
      </View>
    </View>
  );
};

export default HotSpotCard;
