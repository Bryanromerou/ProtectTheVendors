import * as React from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { profileType } from "../../util/types";

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
  ExampleUsers: profileType[];
}

export default function Map({ route, ExampleUsers }: Props) {
  React.useEffect(() => {}, [route]);

  const markers = ExampleUsers.map((vendor) => (
    <Marker
      key={vendor.userID}
      coordinate={{
        latitude: Number(vendor.locationCoordinates?.latitude),
        longitude: Number(vendor.locationCoordinates?.longitude)
      }}
    >
      <Callout>
        <Text style={{ fontWeight: "bold" }}>
          {vendor.locationName ||
            (vendor.name && `${vendor.name.split(" ")[0]}'s Stand`)}
        </Text>
        <Text>Come check us out at {vendor.location}!</Text>
        {vendor.description !== "" ? <Text>{vendor.description}</Text> : null}
      </Callout>
    </Marker>
  ));

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        {markers}
      </MapView>
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
