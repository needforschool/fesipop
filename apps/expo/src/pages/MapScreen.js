import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, Modal, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import CustomMarker from '../../src/component/CustomMarker';

// Image personnalisée
const PopupImage = require('../../assets/logo.png');
const UserImagePin = require('../../assets/userPin.png');
const LocationImagePin = require('../../assets/locationpin.png');

const markersData = [
    {
        coordinate: { latitude: 49.44709008859785, longitude: 1.1042816721797788 },
        title: "Exo",
        description: "Heures : 17h",
        image: PopupImage,
    },
    {
        coordinate: { latitude: 49.442804165962286, longitude: 1.0926350343166913 },
        title: "Poab",
        description: "Heures : 18h",
        image: PopupImage,
    },
    // Ajoutez d'autres marqueurs ici si nécessaire
];

const MapScreen = () => {
    const [region, setRegion] = useState({
        latitude: 48.8566,
        longitude: 2.3522,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [zoomedOut, setZoomedOut] = useState(false); // État pour savoir si on est dézoomé
    const [visibleMarkers, setVisibleMarkers] = useState(markersData); // Liste des marqueurs visibles

    useEffect(() => {
        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                const location = await Location.getCurrentPositionAsync({
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 1000,
                });
                const { latitude, longitude } = location.coords;
                setUserLocation({ latitude, longitude });
                setRegion((prevRegion) => ({
                    ...prevRegion,
                    latitude,
                    longitude,
                }));
            }
            setLoading(false);
        };
        getLocation();
    }, []);

    const handleMarkerPress = (markerData) => {
        setSelectedMarker(markerData); // Mettre à jour l'état avec les informations du marqueur sélectionné
    };

    const closeModal = () => {
        setSelectedMarker(null); // Fermer la modale
    };

    // Vérifier le zoom lorsque la région change et ajuster les marqueurs visibles
    const handleRegionChangeComplete = (newRegion) => {
        setRegion(newRegion);

        // Déterminer si on doit afficher les pins ou non en fonction du zoom
        const zoomOutThreshold = 0.1; // Seuil pour décider quand afficher un groupe de pins
        if (newRegion.latitudeDelta > zoomOutThreshold || newRegion.longitudeDelta > zoomOutThreshold) {
            setZoomedOut(true);

            // Si la carte est dézoomée, regrouper tous les marqueurs visibles dans un seul
            const totalMarkers = markersData.length;
            setVisibleMarkers([{
                coordinate: {
                    latitude: 49.444, // Choisissez une coordonnée centrale pour le marqueur regroupé
                    longitude: 1.1,
                },
                title: `${totalMarkers} événements`,
                description: "Cliquez pour voir plus d'événements",
                image: null, // Pas d'image pour les événements regroupés
            }]);
        } else {
            // Si la carte est suffisamment zoomée, afficher tous les marqueurs individuellement
            setZoomedOut(false);
            setVisibleMarkers(markersData);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={region}
                onRegionChangeComplete={handleRegionChangeComplete} // Appel lors du changement de région
            >
                {userLocation && (
                    <CustomMarker
                        coordinate={userLocation}
                        title="Votre position actuelle"
                        description="Vous êtes ici"
                        height={45}
                        width={45}
                        pinImage={UserImagePin}
                        onPress={() => handleMarkerPress({
                            title: "Votre position actuelle",
                            description: "Vous êtes ici",
                            image: null,
                        })}
                    />
                )}

                {/* Afficher les marqueurs visibles (soit un groupe, soit plusieurs) */}
                {visibleMarkers.map((marker, index) => (
                    <CustomMarker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        pinImage={LocationImagePin}
                        height={35}
                        width={35}
                        onPress={() => handleMarkerPress(marker)}
                    />
                ))}
            </MapView>

            {selectedMarker && (
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={!!selectedMarker}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            {/* Image au-dessus du titre */}
                            {selectedMarker.image && (
                                <Image source={selectedMarker.image} style={styles.modalImage} />
                            )}
                            <Text style={styles.modalTitle}>{selectedMarker.title}</Text>
                            <Text style={styles.modalDescription}>{selectedMarker.description}</Text>
                            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
    modalImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    closeButton: {
        backgroundColor: '#1B1464',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
