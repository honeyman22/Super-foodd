import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
//@ts-ignore
import Icon1 from "react-native-vector-icons/MaterialIcons";
const NavigationBar = ({ navigation, route }: any) => {
  return (
    <View className=" relative flex flex-row bg-white drop-shadow-[0px_-4px_80px_rgba(2,41,100,0.08)]   justify-between w-full h-20 items-center shadow-lg space-x-10 px-10  bottom-0">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("/home");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon1
          name="home"
          size={20}
          color={route?.name === "/home" ? "#FE3A82" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("/search");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon
          name="search"
          size={20}
          color={route?.name === "/search" ? "#FE3A82" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon name="heart" size={20} color="#808080" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon name="user" size={20} color="#808080" />
      </TouchableOpacity>

      <View className="absolute h-16 w-16 left-[40%]   -top-10 shadow-lg rounded-full flex items-center justify-center border-dashed ">
        <TouchableOpacity
          // onPress={() => navigation.navigate("expense-report")}
          className="w-[60px] h-[60px] rounded-full justify-center items-center flex bg-primary"
        >
          <Icon1 name="shopping-cart" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationBar;
