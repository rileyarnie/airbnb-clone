import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";
import COLORS from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const Login = (props: Props) => {
  useWarmUpBrowser();

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
        placeholderTextColor="#ABABAB"
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.seperatorView}>
        <View style={styles.seperatorInnerView}></View>
        <Text style={styles.seperator}>or</Text>
        <View style={styles.seperatorInnerView}></View>
      </View>
      <View style={{ gap: 15 }}>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonOutlineText}>Continue with phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline}>
          <Ionicons
            style={defaultStyles.btnIcon}
            name="ios-logo-apple"
            size={20}
            color="black"
          />
          <Text style={styles.buttonOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline}>
          <Ionicons
            style={defaultStyles.btnIcon}
            name="logo-google"
            size={20}
            color="black"
          />
          <Text style={styles.buttonOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline}>
          <Ionicons
            style={defaultStyles.btnIcon}
            name="md-logo-facebook"
            size={20}
            color="black"
          />
          <Text style={styles.buttonOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 26,
  },
  seperatorView: {
    flexDirection: "row",
    fontFamily: "Montserrat-semibold",
    color: COLORS.lightGray,
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperatorInnerView: {
    flex: 1,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  seperator: {},
  buttonOutline: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  buttonOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Montserrat-semibold",
  },
});
