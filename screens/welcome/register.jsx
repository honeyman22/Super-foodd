import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import {
  CustomButton,
  CustomButtonIcon,
} from "../../components/common/custom-button";

const Register = ({ navigation }) => {
  return (
    <View className="w-full h-screen px-6 py-5  ">
      <Image
        source={require("../../assets/welcome/register.png")}
        className="w-[327px] h-[327px]  object-contain"
      />
      <Text className="text-2xl mt-10 text-center font-semibold">
        Welcome to Super Foodo
      </Text>
      <Text className="text-sm mt-3 text-center ">
        Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque{" "}
      </Text>
      <View className="mt-12">
        <CustomButton name={"Create account"} />
      </View>
      <View className="mt-4">
        <CustomButtonIcon name={"Login "} />
      </View>
      <Text className="text-center mt-8 leading-5">
        By
        <Text
          onPress={() => navigation.navigate("/signup")}
          className="font-semibold text-black"
        >
          {" "}
          Registering{" "}
        </Text>
        or{" "}
        <Text
          onPress={() => navigation.navigate("/signup")}
          className="font-semibold text-black"
        >
          Login
        </Text>{" "}
        you have agreed to these{" "}
        <Text
          onPress={() => navigation.navigate("/signup")}
          className="font-semibold text-black"
        >
          Terms and Conditions.
        </Text>{" "}
      </Text>
    </View>
  );
};

export default Register;
