import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-elements';
import {DragTextEditor} from 'react-native-drag-text-editor';

const WINDOW = Dimensions.get('window');

function ImageMarkerX({navigation}) {
  return (
    <SafeAreaView style={styles.overall_view}>
      <Button
        title="home"
        containerStyle={styles.home_button}
        onPress={() => navigation.navigate('AppHomePage')}
      />
      <View style={styles.body}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1623476408624-721c9185d569?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80',
          }}
          style={{width: WINDOW.width, height: WINDOW.width}}>
          <DragTextEditor
            minWidth={100}
            minHeight={100}
            w={200}
            h={200}
            x={WINDOW.width / 4}
            y={WINDOW.height / 3}
            FontColor={'#000000'}
            LineHeight={15}
            TextAlign={'left'}
            LetterSpacing={0}
            FontSize={15}
            isDraggable={true}
            isResizable={true}
            TopRightAction={() => console.log('-Top Right Pressed')}
            centerPress={() => console.log('-Center Pressed')}
            onTextChanged={text => console.log('Text contents =', text)}
            onDragStart={() => console.log('-Drag Started')}
            onDragEnd={() => console.log('- Drag ended')}
            onDrag={() => console.log('- Dragging...')}
            onResizeStart={() => console.log('- Resize Started')}
            onResize={() => console.log('- Resizing...')}
            onResizeEnd={() => console.log('- Resize Ended')}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default ImageMarkerX;

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
    // justifyContent: 'center',
  },
});
