import React from 'react';
import { View, ImageBackground, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png'

import styles from './styles';

function GiveClasses() {

    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesBackgroundImage} style={styles.content}>
                <Text style={styles.title} >Quer ser um Proffy ?</Text>
                <Text style={styles.description} >Para começar você precisa se cadastrar como professor na nossa plataforma Web.</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;