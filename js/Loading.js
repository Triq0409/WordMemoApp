import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Loading = () => {
    return(
        <View style={styles.loadContainer}>
          <Image style={styles.logos} source={require('../src/logos.png')} />
          <Image style={styles.members} source={require('../src/member.png')} />
        </View>
      );
}

const styles = StyleSheet.create({
    loadContainer: {
        backgroundColor: "#005EB8",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logos: {
      height: 60,
      alignSelf: 'center',
      marginTop: 330,
    },
    members: {
      marginBottom: 30,
    },
});

export default Loading;
