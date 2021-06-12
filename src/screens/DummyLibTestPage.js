import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

function ReplaceThis({navigation}) {
  return (
    <SafeAreaView style={styles.overall_view}>
      <Button
        title="home"
        containerStyle={styles.home_button}
        onPress={() => navigation.navigate('AppHomePage')}
      />
      <View style={styles.body}>
        <Text>play with package here</Text>
      </View>
    </SafeAreaView>
  );
}

export default ReplaceThis;

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
