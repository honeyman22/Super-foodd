import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import Filter from "./filter-modal";

const TopHeader = () => {
  return (
    <View className="w-full flex flex-row justify-between items-center">
      <View className="flex flex-row space-x-2">
        <Image
          source={require("../../assets/deleteable/venom.jpg")}
          className="h-12 w-12 rounded-full object-cover"
        />
        <View>
          <Text className="text-base font-medium">Nishan Bhattarai</Text>
          <Text className="text-xs ">Balkumari, lalitpur</Text>
        </View>
      </View>
    </View>
  );
};

export default TopHeader;
