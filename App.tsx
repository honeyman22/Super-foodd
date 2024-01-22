import React from "react";
import "./app.d";
import { StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/welcome";
import Login from "./screens/auth/login";
import Register from "./screens/welcome/register";
import SignUp from "./screens/auth/signup";
import Home from "./screens/home";
import Search from "./screens/search";

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
            name="/register"
            component={Register}
            options={{ title: "Register", headerShown: false }}
          />
          <Stack.Screen
            name="/login"
            component={Login}
            options={{ title: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="/signup"
            component={SignUp}
            options={{ title: "Sign Up", headerShown: false }}
          />
          <Stack.Screen
            name="/home"
            component={Home}
            options={{
              title: "",
              headerShown: false,
              headerShadowVisible: false,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name="/search"
            component={Search}
            options={{
              title: "Search",
              headerShown: true,
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
