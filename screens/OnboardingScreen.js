import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return (
        <View
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}


const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#212121',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Connect Socially',
                subtitle: 'Be a part of an exclusive community of brands and retailers',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Trade Economically!',
                subtitle: 'A one stop platform to automate and upgrade your business.',
            },
            {
                backgroundColor: '#444EED',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'An Digital Era production',
                subtitle: 'Digitize your business and be equipped for the ever-expanding industry.',
            },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
});