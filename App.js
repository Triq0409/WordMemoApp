import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import Loading from './js/Loading';
import Main from './js/Main';
import Test from './js/Test';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Test />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#005EB8",
    flex: 1,
  },
});

export default App;
