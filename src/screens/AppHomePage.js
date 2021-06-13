import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const packages = [
  {
    name: 'dummy package test page',
    details: 'entire san in your pocket',
    screen_name: 'DummyLibTestPage',
  },
  {
    name: 'react-native-url-preview-tgp',
    details: 'shows preview of link content',
    screen_name: 'RNUrlPreviewTGP',
  },

  {
    name: 'react-native-image-marker',
    details: '',
    screen_name: 'ImageMarker',
  },

  {
    name: 'Iconly test - react-native-custom-icon',
    details:
      'converting iconly icons to work for RN with help of custom-icon package',
    screen_name: 'Iconly',
  },
];

function AppHomePage({navigation}) {
  return (
    <SafeAreaView style={styles.container_view}>
      <Text style={styles.default_text}>list of packages</Text>
      <View style={styles.list_view}>
        {packages.map((item, key) => (
          <ListItem
            containerStyle={styles.list_item_container}
            onPress={() => navigation.navigate(item.screen_name)}>
            <Text>{item.name}</Text>
          </ListItem>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default AppHomePage;

const styles = StyleSheet.create({
  container_view: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  default_text: {
    fontSize: 34,
    color: '#333333',
    fontWeight: 'bold',
    marginVertical: '10%',
  },
  list_view: {
    alignItems: 'center',
    width: '100%',
    marginVertical: '5%',
  },
  list_item_container: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: '90%',
    borderRadius: 10,
  },
});
