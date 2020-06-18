import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width: $windowWidth } = Dimensions.get('window');
const { height: $windowHeight } = Dimensions.get('window');

const { statusBarHeight: $statusBarHeight } = Constants;

const $rem = $windowWidth > 340 ? 18 : 16;
const $borderRadius = 10;

export default {
	$windowWidth,
	$windowHeight,
	$statusBarHeight,
	$borderRadius,
	$rem,
};
