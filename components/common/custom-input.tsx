import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput, Pressable } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/Feather";

interface CustomInputProps {
  errors: any;
  id: string;
  label?: string;
  placeholder?: string;
  control: any;
}

export const CustomInput = ({
  label,
  placeholder,
  id,
  errors,
  control,
}: CustomInputProps) => {
  return (
    <View className="flex flex-col space-y-2 ">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#B4B4B4"}
              className="border h-14 px-8 text-base  rounded-full w-full "
            />
          )}
          name={id}
        />
      </View>

      {errors[`${id}`] && (
        <Text className="text-red-500 text-sm font-normal">
          {errors[`${id}`].message as string}
        </Text>
      )}
    </View>
  );
};

export const CustomPassword = ({
  label,
  placeholder,
  id,
  errors,
  control,
}: CustomInputProps) => {
  const [open, setOpen] = useState(true);
  return (
    <View className="flex  flex-col space-y-2 ">
      <View className=" border h-14 px-8 text-base flex flex-row items-center justify-between rounded-full w-full ">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#B4B4B4"}
              secureTextEntry={open}
              className="w-[80%] text-base"
            />
          )}
          name={id}
        />
        <Pressable onPress={() => setOpen(!open)}>
          <Icon name={open ? "eye-off" : "eye"} size={20} color="#7d7d7d" />
        </Pressable>
      </View>

      {errors[`${id}`] && (
        <Text className="text-red-500 text-sm font-normal">
          {errors[`${id}`].message as string}
        </Text>
      )}
    </View>
  );
};
