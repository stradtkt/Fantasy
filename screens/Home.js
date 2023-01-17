import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../components/UI/Title';
import Colors from '../constants/colors';

const Home = () => {
  return (
    <LinearGradient style={styles.background} colors={[Colors.black0, Colors.black2, Colors.black4, Colors.black5, Colors.black7]}>
        <View>
            <Title style={styles.title}>Drego Sports</Title>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'Anton-Regular',
        marginTop: 35,
    },
    background: {
      flex: 1
    }
});

export default Home;