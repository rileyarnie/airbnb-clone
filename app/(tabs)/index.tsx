import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Explore = (props: Props) => {
  return (
    <View>
      {/* <Text>Explore
        
      </Text> */}
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/booking">Booking</Link>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
