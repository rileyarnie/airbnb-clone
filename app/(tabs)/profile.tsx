import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

type Props = {};

const Profile = (props: Props) => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="log out" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Log In</Text>
        </Link>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
