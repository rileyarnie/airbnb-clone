import React from "react";
import Svg, { Path, Circle, G } from "react-native-svg";

interface IProps {
  color?: string;
}

const FacebookIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 48 48" width="20px" height="20px">
      <Circle fill="#039BE5" cx="24" cy="24" r="19" />
      <G>
        <Path
          fill="#FFFFFF"
          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
        />
      </G>
    </Svg>
  );
};

export default FacebookIcon;
