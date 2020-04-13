import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G
        stroke={props.isFocused ? 'white' : '#67B521'}
        fill={props.isFocused ? '#67B521' : 'none'}
        fillRule="evenodd"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
      </G>
    </Svg>
  );
};

export default SvgComponent;