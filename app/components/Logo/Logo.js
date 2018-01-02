import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';


// stateless component as no state needed - parenthesis to implicitly return the component

const Logo = () => (
<View style={styles.container}>
    <Image resizeMode="contain"
        style={{width: 250, height: 45}}
        source={{uri: 'https://sarchitech.com/wp-content/uploads/2017/09/sarchitech-logo.png'}}
    />
        <Text style={styles.text}>Currency  Converter</Text>
</View>
);

export  default Logo;