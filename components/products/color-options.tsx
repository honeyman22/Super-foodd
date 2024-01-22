import React from "react";
import { Pressable, Text, View } from "react-native";

const ColorOptions = ({ selected, color, handlePress }: any) => {
  return (
    <View className="flex pr-5  flex-row space-x-2">
      <Pressable
        onPress={() => handlePress()}
        className={`w-5 h-5 border ${
          selected === color ? "border-primary" : "border-gray-300"
        } rounded-full flex items-center justify-center`}
      >
        <View
          className={`w-3 h-3 ${
            selected === color ? "bg-primary " : ""
          }  rounded-full`}
        ></View>
      </Pressable>
      <Text className="capitalize">{color}</Text>
    </View>
  );
};

export default ColorOptions;
