import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = () => {
    return(
        <View style={styles.mainContainer}>
            <Image style={styles.logos} source={require('../src/logos.png')} />
            <View style={styles.rectangleBack}>
                <View style={styles.folderList}>
                    <Text style={styles.textStyle}>최근 사용</Text>
                    <View style={styles.folders}></View>
                </View>
                <View style={styles.rectangleTop}>
                </View>
                <View style={styles.naviBar}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#005EB8",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logos: {
        height: 60,
        marginBottom: 35,
      },
    rectangleBack: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#f9f9f9",
        width: windowWidth,
        height: windowHeight*0.8,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    rectangleTop:{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#c6d4e1",
        width: windowWidth,
        height: windowHeight*0.5,
    },
    naviBar: {
        width: windowWidth,
        height: 60,
        backgroundColor: "#005eb8",  
    },
    textStyle: {
        fontSize: 15,
        color: "#005EB8",
        marginHorizontal: 20,
    },
    folders: {
        width: 240,
        height: 100,
        backgroundColor: "#ffffff",
        alignSelf: 'center',
        marginVertical: 10,
    },
    folderList: {
        alignItems: 'center',
    }
});

export default Main;
