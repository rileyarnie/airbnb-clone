import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import COLORS from "@/constants/Colors";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Tabs
      // initialRouteName="explore"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryRed,
        tabBarLabelStyle: { fontFamily: "Montserrat-semibold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarLabel: "Explore",
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
          tabBarLabel: "Wishlists",
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="airbnb" size={size} color={color} />
          ),
          tabBarLabel: "Trips",
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-chatbox-outline" size={size} color={color} />
          ),
          tabBarLabel: "Inbox",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
