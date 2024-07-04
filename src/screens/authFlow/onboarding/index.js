import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, FlatList, Image, Dimensions} from 'react-native';
import {styles} from './styles';
import {colors, appIcons, routes} from '../../../services';
import Button from '../../../components/button';
const {width} = Dimensions.get('window');
const Onboarding = ({navigation}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const listRef = useRef(null);
  const onboardingArray = [
    {
      id: 1,
      image: appIcons.onboarding1,
      heading: 'Your Personalized Learning Path ',
      headingTwo:
        'We adapt to your unique style, creating a path thats just right for you.',
    },
    {
      id: 2,
      image: appIcons.onboarding2,
      heading: 'Your Personalized Learning Path ',
      headingTwo:
        'We adapt to your unique style, creating a path thats just right for you.',
    },
    {
      id: 3,
      image: appIcons.onboarding3,
      heading: 'Your Personalized Learning Path ',
      headingTwo:
        'We adapt to your unique style, creating a path thats just right for you.',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.onboardingItem}>
      <Image source={item.image} style={styles.onboardingImage} />
      <Text style={styles.onboardingHeading}>{item.heading}</Text>
      <Text style={styles.onboardingHeadingTwo}>{item.headingTwo}</Text>
    </View>
  );

  const onScroll = event => {
    newIndex = Math.round(event.nativeEvent.contentOffset.x / 360);
    setcurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <FlatList
        data={onboardingArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={listRef}
      />
      <View style={styles.pagination}>
        {onboardingArray.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
      <View style={styles.buttonView}>
        <Button onPress={() => navigation.navigate(routes.login)}>
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;
