import React from "react";
import { Pressable, Text } from "react-native";

export const CustomButton = ({ name, func }: any) => {
  return (
    <Pressable className="h-14 w-full rounded-full bg-primary flex items-center justify-center">
      <Text className="font-semibold text-base">{name}</Text>
    </Pressable>
  );
};
export const CustomButtonIcon = ({ name, func }: any) => {
  return (
    <Pressable className="h-14 w-full rounded-full border flex items-center border-black justify-center">
      <Text className="font-semibold text-base">{name}</Text>
    </Pressable>
  );
};
