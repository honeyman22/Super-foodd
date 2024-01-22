import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const FeaturedCard = ({ navigation }: any) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ProductDetails", { id: "5" })}
      className="w-[255px]   mr-4 "
    >
      <Image
        source={require("../../assets/deleteable/burgers.jpg")}
        className="w-[255px] h-[142px] rounded-lg"
      />
      <Text className="text-base font-medium">McDonald’s(Best Offer)</Text>
      <Text className="text-xs text-[#555]">
        $4.99 Delivery Fee . 15-30 min
      </Text>
    </Pressable>
  );
};

export default FeaturedCard;
