import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const CircleSVG = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#4EA8DE"
      d="M8.964 1.86A7.14 7.14 0 1 1 1.824 9a7.168 7.168 0 0 1 7.14-7.14Zm0-1.587a8.727 8.727 0 1 0 .072 17.454A8.727 8.727 0 0 0 8.964.273Z"
    />
  </Svg>
)
