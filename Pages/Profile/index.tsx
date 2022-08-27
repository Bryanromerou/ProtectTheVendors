import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ExampleUsers from "../../util/exampleUsers.json";
import { profileType } from "../../util/types";

interface Props {}

const exampleProfile = ExampleUsers["1"] as profileType;

const Profile = (props: Props) => {
  const profile = Object.entries(exampleProfile).map(([key, value]) => {
    return (
      <Text key={key}>
        {key} : {String(value)}
      </Text>
    );
  });

  return (
    <View>
      <Text>New Profile</Text>
      {profile}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Profile;
