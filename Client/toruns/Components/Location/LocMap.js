import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import * as col from '../../Styles/Colours';
import MapStyle from '../../Styles/MapStyle';
import { windowHeight, windowWidth } from '../../Styles/Dimensions';

const LocMap = ({ dest }) => {
  const [region] = useState({
    latitude: dest.coordinates[0],
    longitude: dest.coordinates[1],
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  });
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={region}
        zoomEnabled={false}
        pitchEnabled={false}
        showsBuildings={true}
        tintColor={col.highContrast}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={region} pinColor={col.accent} tappable={false} />
      </MapView>
    </View>
  );
};

export default LocMap;

const styles = StyleSheet.create({
  map: {
    marginTop: 20,
    height: windowHeight * 0.3,
    marginHorizontal: 10,
    borderRadius: 15,
  },
});
