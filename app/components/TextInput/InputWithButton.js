import React, {  } from 'react';
import { View, Text, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";

import styles from './styles';

const InputWithButton = (props) => {

    // destructure values
   const {onPress, buttonText, edtitable = true} = props;

   const underlayColor = '';

   const containerStyles = [styles.container];
   if(edtitable === false){
       containerStyles.push(styles.containerDisabled);
   }

    return(
    <View style={styles.container}>
        <TouchableHighlight  onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        {/* <View style={styles.border}> */}
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props}/>
        {/* </View> */}
    </View>
    )
};

// setup propTypes
InputWithButton.PropTypes = {
    onPress: PropTypes.func, // function
    buttonText: PropTypes.string,
    edtitable: PropTypes.bool
}

export default InputWithButton;