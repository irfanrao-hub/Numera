import {StyleSheet} from 'react-native';
import {colors, fontFamily, wp} from '../../../services';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  onboardingImage: {
    resizeMode: 'contain',
    width: 310,
    height: 290,
  },
  onboardingItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: wp(100),
  },
  onboardingHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    color: colors.lightBackground,
    textAlign: 'center',
    marginVertical: 40,
    lineHeight: 30,
  },
  onboardingHeadingTwo: {
    fontFamily: fontFamily.appTextRegular,
    color: colors.heading2,
    textAlign: 'center',
    lineHeight: 28,
    marginHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertival: 20,
  },
  dot: {
    marginBottom: 60,
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: '#cccccc',
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: '#3066BE',
  },
  buttonView: {
    textAlign: 'center',
    alignSelf: 'center',
    width: '60%',
  },
});
