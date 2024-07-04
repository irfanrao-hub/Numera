import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
  },
  policytext: {
    textAlign: 'justify',
    margin: 8,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 16,
    color: colors.blacklight,
  },
});
