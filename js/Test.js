import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'],
    dayNamesShort: ['월','화','수','목','금','토','일'],
    today: '오늘' // 공식 문서에는 today 프로퍼티가 있지만, 타입스크립트를 이용하는 분들에게는 에러가 발생합니다.
  };
  
  LocaleConfig.defaultLocale = 'kr';

const Test = () => {

    return(
        <View style={styles.container}>
            <Calendar 
                current= {new Date()} // new Date = 현재 날짜 리턴
                onDayPress={(day) => {console.log('selected day', day)}}
                onDayLongPress={(day) => {console.log('selected day', day)}}
                monthFormat={'yyyy MMM'}

                markedDates={{
                    '2020-08-18': {selected: true, selectedColor: '#005EB8'},
                  }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005EB8',
        justifyContent: 'flex-end',
    },
});

export default Test;