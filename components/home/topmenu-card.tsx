import React from "react";
import { Image, Text, View } from "react-native";

const TopMenuCard = () => {
  return (
    <View className="w-20 mr-3">
      <View className="w-20 bg-white shadow-lg rounded-lg    flex items-center justify-center h-[65px]">
        <Image
          className="h-14 w-14"
          source={require("../../assets/deleteable/burger.png")}
        />
      </View>
      <Text className="text-base mt-1 text-center ">Burgers</Text>
    </View>
  );
};

export default TopMenuCard;
