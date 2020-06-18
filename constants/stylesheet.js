import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width: $windowWidth } = Dimensions.get('window');
const { height: $windowHeight } = Dimensions.get('window');

const { statusBarHeight: $statusBarHeight } = Constants;

const $rem = $windowWidth > 340 ? 18 : 16;
const $borderRadius = 10;

const $title = '#0C1544';
const $accent = '#FE445B';

export default {
	$windowWidth,
	$windowHeight,
	$statusBarHeight,
	$borderRadius,
	$rem,
	$title,
	$accent,
};
