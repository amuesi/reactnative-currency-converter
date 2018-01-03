import React, {Component} from 'react';
import {ScrollView, StatusBar, Platform } from 'react-native';
import {ListItem, Separator} from '../components/List';
import {Ionicons} from '@expo/vector-icons';
 
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios': 'md'; // if ios return ios else return md for android
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
 
  handleThemePress = () => {
    console.log("press themes");
  };

  handleSitePress = () => {
    console.log("press site");
  };

  render() {
    return <ScrollView>
        <StatusBar translucent={false} barStyle={"default"} />
        <ListItem text="Themes" onPress={this.handleThemePress}
         customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`}
          color={ICON_COLOR} size={ICON_SIZE} />} />
        <Separator />
        <ListItem text="Fixer.io" onPress={this.handleSitePress} 
        customIcon={<Ionicons name={`${ICON_PREFIX}-add"`}
        color={ICON_COLOR} size={ICON_SIZE} />} />
      </ScrollView>
  }
}

export default Options;