import React from "react";
import { View, ScrollView, ScrollViewBase } from "react-native";
import NavigationBar from "./common/nav-bar";

const Container = ({ children, navigation, route }: any) => {
  return (
    <View style={{ flex: 1 }} className="h-screen ">
      <View className="h-10 bg-white "></View>
      <ScrollView className="px-6 py-5" style={{ flex: 1 }}>
        {children}
      </ScrollView>
      <NavigationBar navigation={navigation} route={route} />
    </View>
  );
};

export default Container;
