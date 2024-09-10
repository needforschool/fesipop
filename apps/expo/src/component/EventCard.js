import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCard = ({ city, groupName, imageSource }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.cityText}>{city} : </Text>
                <Text style={styles.groupText}>{groupName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#b9f8f4',
        borderRadius: 20,
        marginBottom: 25,
        padding: 15,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 40,
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
        flexDirection:"row",
    },
    cityText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    groupText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EventCard;
