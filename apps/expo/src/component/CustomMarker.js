import React from 'react';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ coordinate, title, description, onPress, pinColor = "red" }) => {
    return (
        <Marker
            coordinate={coordinate}
            title={title}
            description={description}
            pinColor={pinColor}
            onPress={onPress}
        />
    );
};

export default CustomMarker;
