import React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text} from 'react-native';
import backgroundImage from "../../assets/bg2.png";
import logo from "../../assets/logo-with-text.png";

const HomeScreen = () => {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.lineText}>BLACKPINK</Text>
                <Text style={styles.lineTextSmall}>TWICE, BIG BANG</Text>
                <Text style={styles.lineTextSmaller}>NCT, GOT7, RED VELVET, HALO</Text>
                <Text style={styles.lineTextTiny}>2AM, AOA, EPEX, EVOL, TWICE, NMIXX</Text>
                <Text style={styles.lineTextTiny}>KARA, LABOUM, MADTOWN, NCT,HIGHLIGHT</Text>
                <Text style={styles.lineTextTiny}>STAYC, TRCNG, TVXQ, SS501, NCTAPO</Text>
                <Text style={styles.lineTextSmaller}>SHINEE, EPEX, ROCKET, NCT</Text>
                <Text style={styles.lineTextSmall}>PARAN, HIGHLIGHT</Text>
                <Text style={styles.lineText}>RAINBOW</Text>
                {/* Continue d'ajouter du texte si nécessaire */}
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    contentContainer: {
        flexGrow: 1,
        marginTop:15,
        alignItems: 'center',
        padding: 20,
    },
    image:{
        height:200,
        width:200,
        marginBottom: 60,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '400',
        color: 'white',
        marginBottom: 100,
    },
    lineText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    lineTextSmall: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    lineTextSmaller: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    lineTextTiny: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default HomeScreen;
