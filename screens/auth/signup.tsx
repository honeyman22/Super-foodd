import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  CustomInput,
  CustomPassword,
} from "../../components/common/custom-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/auth-schema";
import {
  CustomButton,
  CustomButtonIcon,
} from "../../components/common/custom-button";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  return (
    <ScrollView>
      <View className="p-6 ">
        <View className="w-full mt-5 flex items-center justify-center ">
          <Image
            source={require("../../assets/logo.png")}
            className="w-[150px] h-[110px]"
          />
        </View>
        <View className="mt-8">
          <CustomInput
            control={control}
            errors={errors}
            id="username"
            placeholder="Email"
          />
        </View>
        <View className="mt-7">
          <CustomPassword
            control={control}
            errors={errors}
            id="password"
            placeholder="Password"
          />
        </View>
        <View className="mt-7">
          <CustomPassword
            control={control}
            errors={errors}
            id="password"
            placeholder="Confirm Password"
          />
        </View>
        <Text
          onPress={() => console.log("Forget Password")}
          className="mt-5 text-base text-right pr-4"
        >
          Forget password ?
        </Text>
        <View className="mt-5">
          <CustomButton name="Sign Up" />
        </View>
        <View className="w-full flex flex-row items-center justify-between my-10">
          <View className="border h-0 w-[120px]"></View>
          <Text className="text-base font-semibold">OR</Text>
          <View className="border h-0 w-[120px]"></View>
        </View>
        <View className="">
          <CustomButtonIcon type="google" name="Sign Up with Google" />
        </View>
        <View className="mt-5">
          <CustomButtonIcon type="facebook" name="Sign Up with Facebook" />
        </View>
        <Text className="text-center mt-7 text-sm">
          Don’t have an account?
          <Text className="font-semibold"> Sign up </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
