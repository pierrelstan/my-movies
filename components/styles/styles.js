import styled from 'styled-components';
import { Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const Title = styled.Text`
  font-size: ${Math.round(screenWidth) >= 737 ? `30px` : `18px`};
  margin: 4px;
  font-weight: bold;
  color: #b6b133;
`;

export { Title };
