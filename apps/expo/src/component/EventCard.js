import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const locationIcon = require('../../assets/location.png'); // Ton image d'icône de localisation

const EventCard = ({ city, groupName, imageSource }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.groupName}>{groupName}</Text>
                <View style={styles.cityContainer}>
                    <Image source={locationIcon} style={styles.locationImage} />
                    <Text style={styles.cityText}>{city}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.67)',
    },
    image: {
        width: '100%',
        height: 150,
    },
    infoContainer: {
        padding: 10,
        justifyContent: 'center',
    },
    cityContainer: {
        flexDirection: 'row', // Permet d'aligner l'icône et le texte côte à côte
        alignItems: 'center', // Centrer verticalement
    },
    locationImage: {
        width: 20,
        height: 20,
        marginRight: 8, // Ajouter un espacement entre l'image et le texte
    },
    cityText: {
        color: 'rgba(180,180,180,0.73)',
        fontSize: 16,
    },
    groupName: {
        color: '#1B1464',
        fontSize: 19,
        marginTop: 5,
        fontWeight: "bold",
    },
});

export default EventCard;
