import React from "react";
import { Pressable, Text } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";

export const CustomButton = ({ name, func }: any) => {
  return (
    <Pressable className="h-14 w-full rounded-full bg-primary flex items-center justify-center">
      <Text className="font-semibold text-base">{name}</Text>
    </Pressable>
  );
};
export const CustomButtonIcon = ({ name, func, type }: any) => {
  return (
    <Pressable
      onPress={func}
      className="h-14 w-full rounded-full border space-x-4 flex items-center flex-row border-black justify-center"
    >
      {type ? <Icon name={type} size={20} /> : null}

      <Text className="font-semibold text-base">{name}</Text>
    </Pressable>
  );
};
