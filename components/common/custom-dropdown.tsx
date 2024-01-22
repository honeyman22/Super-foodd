import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/Feather";
import ReviewCard from "../products/review-card";

const CustomDropDown = ({ component, title }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <View className="border-b pb-2 border-gray-400">
      <Pressable
        onPress={() => setOpen(!open)}
        className="h-20 flex flex-row items-center  justify-between"
      >
        <Text className="text-lg font-semibold">{title}</Text>
        <Icon name="chevron-down" size={16} />
      </Pressable>
      {open && <View className="mt-2">{component}</View>}
    </View>
  );
};

export default CustomDropDown;
