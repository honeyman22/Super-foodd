import React from "react";
import "./app.d";
import { StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/welcome";
import Login from "./screens/auth/login";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="/"
            component={WelcomeScreen}
            options={{ title: "Welcome", headerShown: false }}
          />
          <Stack.Screen
            name="/login"
            component={Login}
            options={{ title: "Welcome", headerShown: false }}
          />
          {/* <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "",
            headerShown: false,
            headerShadowVisible: false,
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="expense-report"
          component={ExpenseReport}
          options={{
            title: "",
            headerShown: true,
            headerShadowVisible: false,
          }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
