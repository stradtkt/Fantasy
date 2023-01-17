import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors';
import Title from '../components/UI/Title';

const PLANS = [
  {
    title: 'Standard',
    price: 10,
    benefits: [
      "College CheatSheet",
      "Access To Fantasy"
    ]
  },
  {
    title: 'Plust',
    price: 20,
    benefits: [
      "College CheatSheet",
      "NFL CheatSheet",
      "Access To Fantasy"
    ]
  },
  {
    title: 'Standard',
    price: 30,
    benefits: [
      "College CheatSheet",
      'NFL CheatSheet',
      "Access To Fantasy",
      "Videos Every Week On How To Improve Your Team"
    ]
  },
]

const Plans = () => {
  return (
    <LinearGradient style={styles.background} colors={[Colors.black0, Colors.black2, Colors.black4, Colors.black5, Colors.black7]}>
        <View>
            <Title style={styles.title}>Plans</Title>
        </View>
        <View>
          <View></View>
          <View></View>
          <View></View>
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

export default Plans;