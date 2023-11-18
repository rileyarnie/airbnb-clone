import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

type Props = {};

const Login = (props: Props) => {
  useWarmUpBrowser();

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
