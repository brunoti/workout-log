import { Dimensions } from 'react-native';

// Precalculate Device Dimensions for better performance
const { width, height } = Dimensions.get('window');
const x = width;
const y = height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 15;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
export default function em(value) {
  return unit * value;
}
