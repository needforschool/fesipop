import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const MapScreen = () => {
    const [region, setRegion] = useState({
        latitude: 48.8566,
        longitude: 2.3522,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLocation = async () => {
            // Vérifier la permission
            const permission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

            if (permission === RESULTS.GRANTED) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        setUserLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                        setRegion({
                            ...region,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                        setLoading(false);
                    },
                    error => {
                        console.log(error);
                        setLoading(false);
                    },
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                );
            } else {
                // Demander la permission si elle n'est pas accordée
                const newPermission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                if (newPermission === RESULTS.GRANTED) {
                    // Réessayer d'obtenir la position
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            setUserLocation({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            });
                            setRegion({
                                ...region,
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            });
                            setLoading(false);
                        },
                        error => {
                            console.log(error);
                            setLoading(false);
                        },
                        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                    );
                } else {
                    // La permission est toujours refusée
                    setLoading(false);
                }
            }
        };

        getLocation();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    ...region,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                onRegionChangeComplete={setRegion}
            >
                {userLocation && (
                    <Marker
                        coordinate={userLocation}
                        title="Votre position actuelle"
                        description="Vous êtes ici"
                        pinColor="blue" // Couleur du marqueur
                    />
                )}
            </MapView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
