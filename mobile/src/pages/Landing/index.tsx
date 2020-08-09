import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";


import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from "./styles";

function Landing() {
    const navigation = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('Study')
    }

    return (
        <View style={styles.container} >
            <Image source={LandingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer} >
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudyPages}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigationToGiveClassesPage} >
                    <Image source={giveClassIcon} />

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas! {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;