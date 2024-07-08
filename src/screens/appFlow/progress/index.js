import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import {colors, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, AppHeader} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BarChart} from 'react-native-gifted-charts';
import CustomCalendar from '../../../components/calender';

const Progress = ({navigation}) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const barData = [
    {value: 75, label: 12},
    {value: 140, label: 13},
    {value: 199, label: 14},
    {value: 80, label: 15},
    {value: 130, label: 16},
    {value: 160, label: 17},
    {value: 260, label: 18},
  ];
  const xAxisLabels = [12, 13, 14, 15, 16, 17, 18];
  const yAxisLabels = [0, 50, 100, 150, 200, 250, 300];

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  const closeCalendar = () => {
    setCalendarVisible(false);
  };
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'PROGRESS'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View>
            <Text style={styles.etext}>YOUR PROGRESS IS HERE </Text>
          </View>
          <View style={styles.mainhead}>
            <AppHeader
              calendar={true}
              caltxt={'Choose Date From Calender'}
              onCalendarPress={toggleCalendar}
            />
          </View>
          <View style={styles.rowEvenly}>
            <View style={styles.head}>
              <AppHeader
                cardtxtstyle={styles.headtext}
                arrow={true}
                cardtxt={'TIME & DIFFICULTY'}
              />
            </View>
            <View>
              <AppHeader
                cardtxtstyle={styles.numtxt}
                graph={true}
                cardtxt={'165'}
              />
            </View>
            <View style={styles.chartContainer}>
              <BarChart
                barWidth={10}
                noOfSections={7}
                barBorderRadius={20}
                frontColor="#3066BE"     
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                xAxisLabels={xAxisLabels}
                yAxisLabels={yAxisLabels}
                xAxisLabelTextStyle={styles.xAxisLabelTextStyle}
      yAxisTextStyle={styles.yAxisTextStyle}
                rulesThickness={0}
              />
            </View>
            <TouchableOpacity style={styles.socialView}>
              <Text style={styles.modetitle}></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.streak}>
            <View style={styles.row}>
              <Image source={appIcons.fire} style={styles.fire} />
            </View>
            <Text style={styles.etxt}>5 DAY STREAK</Text>
            <Text style={styles.probtxt}>{`Bouns 2 π For Every Problem`}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isCalendarVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <TouchableOpacity onPress={closeCalendar}>
              <View style={styles.modalview}>
                {isCalendarVisible && (
                  <SafeAreaView style={styles.calendermain}>
                    <CustomCalendar
                      onDayPress={day =>
                        console.log(`Date pressed: ${day.dateString}`)
                      }
                    />
                  </SafeAreaView>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Progress;
