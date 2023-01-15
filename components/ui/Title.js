import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({children, style}) => {
  return (
    <View>
        <Text style={[style, styles.title]}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    }
});

export default Title;