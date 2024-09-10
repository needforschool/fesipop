import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MapScreen from '../pages/MapScreen';
import EventScreen from '../pages/EventScreen';
import HomeScreen from '../pages/HomeScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={styles.customButton}
        onPress={onPress}
    >
        <View style={styles.buttonContent}>
            {children}
        </View>
    </TouchableOpacity>
);

const HeaderTitle = () => (
    <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>FESIPOP</Text>
        <Text style={styles.headerSubtitleText}>Music Festival</Text>
    </View>
);

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        right: 20,
                        backgroundColor: '#e6f9fc',
                        borderRadius: 15,
                        height: 90,
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                    },
                    headerStyle: {
                        backgroundColor: '#1B1464',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    headerTitle: () => <HeaderTitle />,
                }}
            >
                <Tab.Screen
                    name="Map"
                    component={MapScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="location-outline" size={30} color={focused ? '#1B1464' : '#d0d3d4'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{

                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../../assets/logo.png')}
                                resizeMode="contain"
                                style={{
                                    width: 70,
                                    height: 70,
                                    marginBottom:5,
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <CustomTabBarButton {...props}>
                                {/* Ici, on supprime l'icône Ionicons et on garde seulement l'image */}
                            </CustomTabBarButton>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Event"
                    component={EventScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="party-popper" size={30} color={focused ? '#1B1464' : '#d0d3d4'} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    customButton: {
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    buttonContent: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#1B1464',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleContainer: {
        alignItems: 'center',
    },
    headerTitleText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    headerSubtitleText: {
        color: 'white',
        fontSize: 14,
    },
});
