import React from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import RNUrlPreview from 'react-native-url-preview-tgp';

// const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const messages = [
  'read this bitches, https://www.vogue.in/beauty/content/how-to-bleach-hair-blonde-billie-eilish-expert-tips-haircare',
  "he's the best - https://twitter.com/nayibbukele",
];

function RNUrlPreviewTGP({navigation}) {
  return (
    <View style={styles.overall_view}>
      <Button
        title="home"
        containerStyle={styles.home_button}
        onPress={() => navigation.navigate('AppHomePage')}
      />
      <ScrollView style={styles.body} contentStyle={styles.body_content}>
        {messages.map((item, key) => (
          <RNUrlPreview
            title={false}
            description={false}
            imageStyle={styles.url_image}
            imageProps={{resizeMode: 'contain'}}
            containerStyle={styles.preview_container}
            text={item}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default RNUrlPreviewTGP;

const styles = StyleSheet.create({
  overall_view: {
    flex: 1,
    flexDirection: 'column',
    width: windowWidth,
  },
  home_button: {
    flex: 0.1,
    width: 150,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'flex-end',
  },
  body: {
    flex: 0.8,

    width: windowWidth,
  },
  body_content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  preview_container: {
    width: windowWidth,
  },
  url_image: {
    width: windowWidth,
    height: undefined,
    aspectRatio: 1,
  },
});
