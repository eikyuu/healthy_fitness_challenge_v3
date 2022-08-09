import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0
};

export default metrics;
