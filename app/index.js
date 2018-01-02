import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import home screen
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

// must build stylesheet before app compiles
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray:'#F0F0F0',
    $darkText: '#343434'


    //outline: 1
});

export default () => <CurrencyList />;