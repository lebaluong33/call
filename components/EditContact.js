import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';


export default class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam('name'),
      phone: this.props.navigation.getParam('phone'),
    };
  }
  _exitHanler() {
    Actions.pop();
  }
  _onChangeName(event) {
    this.setState({
      name: event,
    });
  }
  _onChangePhone(event) {
    this.setState({
      phone: event,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuTop}>
          <Icon
            style={styles.menuIcon}
            name="chevron-left"
            size={50}
            onPress={this._exitHanler}
          />
          <Text style={styles.title}>Edit Contact</Text>
          <Icon style={styles.menuIcon} name="check" size={50} />
        </View>
        <View style={styles.phoneInfo}>
          <Image
            style={styles.avatar}
            source={require('./assets/avatar.jpg')}
          />
          <TextInput
            onChangeText={() => {
              this._onChangeName;
            }}
            style={styles.phoneName}
            defaultValue={this.state.name}
          />
          <TextInput
            onChangeText={() => {
              this._onChangePhone;
            }}
            style={styles.phoneNumber}
            defaultValue={this.state.phone}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#ec4561',
    fontSize: 23,
    height: 'auto',
  },
  menuTop: {
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phoneInfo: {
    flex: 80,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    overflow: 'hidden',
  },
  menuIcon: {
    width: 100,
    height: 100,
    color: '#ec4561',
  },
  phoneName: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 30,
    fontWeight: '400',
  },
});
