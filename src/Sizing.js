import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ResponsiveSize = size => parseFloat((size * width).toFixed(3));

export default Sizing = {
  deviceWidth: width,
  deviceHeight: height,
};
