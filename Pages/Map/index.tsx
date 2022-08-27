import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places
// https://www.npmjs.com/package/react-native-google-maps-directions

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_LAT = 34.0176886;
const INITIAL_LONG = -117.9161251;
const INITIAL_POSITION = {
  latitude: INITIAL_LAT,
  longitude: INITIAL_LONG,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

interface Props {
  route: {
    name: string;
  };
}

export default function Map(props: Props) {
  React.useEffect(() => {
    // return(()=>{
    // console.log('unmounting now...')
    // })
  }, [props.route]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 170
  }
});
