import React, {Component} from 'react'
import {ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ListItem, Seperator, Separator} from '../components/List';

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $orange: "$primaryOrange",
  $green: '$primaryGreen',
  $purple: '$primaryPurple'
});

class Themes extends Component {
    handleThemePress = (color) => {
        console.log('theme', color);
    }

    render(){
        return <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem text="Blue" iconBackground={styles.$blue} onPress={() => this.handleThemePress(styles.$blue)} selected checkmark={false} />
            <Separator />
            <ListItem text="Orange" iconBackground={styles.$orange} onPress={() => this.handleThemePress(styles.$orange)} selected checkmark={false} />
            <Separator />
            <ListItem text="Green" iconBackground={styles.$green} onPress={() => this.handleThemePress(styles.$green)} selected checkmark={false} />
            <Separator />
            <ListItem text="Purple" iconBackground={styles.$purple} onPress={() => this.handleThemePress(styles.$purple)} selected checkmark={false} />
            <Separator />
          </ScrollView>;
    }
}


export default Themes;