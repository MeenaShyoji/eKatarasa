import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class AppWelcome extends React.Component {
  /* homePage = () => {
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Go to Home</Text>
    </View>;
  };
 */
  renderHomeScreen = () => {
    <View>
      <Text>Go To Home</Text>
    </View>;
  };

  render() {
    return (
      <View>
        <Text>We serve you!</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.homebutton}>Go To Home</Text>
          </TouchableOpacity>
        </View>
        <View>{this.renderHomeScreen}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homebutton: {
    color: '#3E5B1C',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginVertical: 40,
    fontSize: 20
  },
  image: {
    //flex: 1,
    justifyContent: 'center'
  }
});
