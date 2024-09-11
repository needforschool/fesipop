import React from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ coordinate, title, description, onPress, pinImage, height, width}) => {
    return (
        <Marker
            coordinate={coordinate}
            title={title}
            description={description}
            onPress={onPress}
        >
            <Image
                source={pinImage}
                style={{ width: width, height: height }}
                resizeMode="contain"
            />
        </Marker>
    );
};

export default CustomMarker;
