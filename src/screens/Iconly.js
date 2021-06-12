import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import MyIcon from 'react-native-custom-icon';
import IcomoonConfig from '/Users/san/Desktop/rn_package_testing/assets/iconly/selection.json';

function Iconly({navigation}) {
  return (
    <SafeAreaView style={styles.overall_view}>
      <Button
        title="home"
        containerStyle={styles.home_button}
        onPress={() => navigation.navigate('AppHomePage')}
      />
      <View style={styles.body}>
        <MyIcon name="TwoUsers" color="teal" size={50} config={IcomoonConfig} />
        <MyIcon
          name="Search"
          color="rebeccapurple"
          size={50}
          config={IcomoonConfig}
        />
        <MyIcon name="Home" color="tomato" size={50} config={IcomoonConfig} />
      </View>
    </SafeAreaView>
  );
}

export default Iconly;

const styles = StyleSheet.create({
  overall_view: {
    flex: 1,
  },
  home_button: {
    flex: 0.1,
    width: 150,
    alignSelf: 'center',
    borderRadius: 15,
  },
  body: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
