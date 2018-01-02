import React, {  } from 'react';
// view to wrap for background color
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.PropTypes = {
    children: PropTypes.any, // making sure any react element can be added as props
};

// export the container to be used within the app
export default Container;
 