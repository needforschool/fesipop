import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import EventCard from "../component/EventCard";
import { api } from '~/utils/api';
const backgroundImage = require('../../assets/icon.png');
const groupImage = require('../../assets/eventimg.jpg');

const EventScreen = () => {
    const postQuery = api.post.all.useQuery();
    const posts = postQuery.data;
    console.log("posts", posts);

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.headerText}>EVENEMENTS</Text>
                    {Array(7).fill(0).map((_, index) => (
                        <EventCard
                            key={index}
                            city="PARIS"
                            groupName="TWICE"
                            imageSource={groupImage}
                        />
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
    },
    scrollViewContainer: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        paddingBottom: 120,
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 35,
        marginBottom: 30,
    },
});

export default EventScreen;
