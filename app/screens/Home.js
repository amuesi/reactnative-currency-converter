import React , {Component} from 'react';
import {View, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Buttons/';
import {LastConverted} from '../components/Text';
import {Header} from '../components/Header';

const TEMP_BASE_CURRENCY = 'GBP';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80.00'
const reverseText = "Reverse Curencies"
const TEMP_CONVERSION_RATE = 0.79
const TEMP_CONVERSION_DATE = new Date();


class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base");
  };

  handlePressBaseQuote = () => {
    console.log("press quote");
  };

  handleTextChange = text => {
    console.log(text);
  };

  handleCurrencySwap =() => {
    console.log('press swap')
  }

  handleOptionsPress = () => {
    console.log('options')
  }
  

  render() {
    return <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behaviour="padding">
          <Logo />
          <InputWithButton buttonText={TEMP_BASE_CURRENCY} onPress={this.handlePressBaseCurrency} default={TEMP_BASE_PRICE} keyboardType="numeric" />
          <InputWithButton editable={false} buttonText={TEMP_QUOTE_CURRENCY} onPress={this.handlePressBaseQuote} value={TEMP_QUOTE_PRICE} />
          <LastConverted base={TEMP_BASE_CURRENCY} quote={TEMP_QUOTE_CURRENCY} date={TEMP_CONVERSION_DATE} conversionRate={TEMP_CONVERSION_RATE} />
          <ClearButton text={reverseText} onPress={this.handleCurrencySwap} />
        </KeyboardAvoidingView>
      </Container>;
  }
}

export default Home;