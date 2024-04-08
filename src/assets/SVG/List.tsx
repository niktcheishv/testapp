import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export const List = (props: SvgProps) => (
  <Svg width={99} height={99} fill="none" viewBox="0 0 24 24" {...props}>
    <G stroke="#CDCDD2" strokeLinecap="round" strokeWidth={1.5}>
      <Path strokeLinejoin="round" d="m15 18.5 5-5m0 5-5-5" />
      <Path d="M11 14H3M11 18H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25" />
    </G>
  </Svg>
);
