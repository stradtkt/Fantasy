import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const Home = () => {
  return (
    <LinearGradient colors={[Colors.black0, Colors.black2, Colors.black4, Colors.black5, Colors.black7]}>
        <View>
            <Title>Drego Sports</Title>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Anton-Regular'
    }
});

export default Home;