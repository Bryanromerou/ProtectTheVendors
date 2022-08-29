import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import ExampleUsers from "../../util/exampleUsers.json";
import { profileType } from "../../util/types";

interface Props {
  route: {
    name: string;
  };
  ExampleUsers: profileType[];
}

const generateTags = (tagArray: string[]) =>
  tagArray.reduce(
    (returnString, tag, idx) =>
      returnString + tag + (idx !== tagArray.length - 1 ? ", " : ""),
    ""
  );

const Profile = ({ ExampleUsers }: Props) => {
  const exampleProfile = ExampleUsers["1"] as profileType;
  const profile = (
    <View>
      <View style={profileStyles(exampleProfile).profileIcon} />
      <Text>Name: {exampleProfile.name}</Text>
      <Text>Location: {exampleProfile.location}</Text>
      {exampleProfile.description ? (
        <Text>Description: {exampleProfile.description}</Text>
      ) : null}
      {exampleProfile.tags.length !== 0 ? (
        <Text>Tags: {generateTags(exampleProfile.tags)}</Text>
      ) : null}
    </View>
  );

  return <View style={styles.container}>{profile}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const profileStyles = (exampleProfile: profileType) =>
  StyleSheet.create({
    profileIcon: {
      width: 40,
      height: 40,
      backgroundColor:
        exampleProfile.profileType === "vendor" ? "green" : "orange",
      borderRadius: 20
    }
  });

export default Profile;
