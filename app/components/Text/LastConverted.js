import React from 'react';
import {Text} from 'react-native';
import moment from 'moment';
import styles from './styles';
import PropTypes from 'prop-types';


const LastConverted = ({base, quote, conversionRate, date}) =>  (
    <Text style={styles.smallText}>
        1 {base} = {conversionRate} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
);


LastConverted.prototypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
}

export default LastConverted;