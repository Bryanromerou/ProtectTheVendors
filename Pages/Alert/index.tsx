import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import ExampleUsers from "../../util/exampleUsers.json";
import { profileType } from "../../util/types";

const exampleUserArray = Object.values(ExampleUsers) as profileType[];

const Alert = () => {
  const AlertMessages = exampleUserArray.map((user) => (
    <Text key={user.userID} style={styles.text}>
      {user.name} is in trouble!! At: {user.location}
    </Text>
  ));

  return (
    <View>
      <Button title="Help Me" />
      <Text style={styles.text}>Current Alerts:</Text>
      {AlertMessages}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10
  }
});

export default Alert;
