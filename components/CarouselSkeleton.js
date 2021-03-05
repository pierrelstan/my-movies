import React from 'react';
import { View, Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styled from 'styled-components';

const { width: screenWidth } = Dimensions.get('window');

export default function CarouselSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor='#444' highlightColor='#666'>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: `${screenWidth}` - 200,
            height: `${screenWidth}` - 60,
            borderBottomColor: '#444',
          }}
        ></View>
      </View>
    </SkeletonPlaceholder>
  );
}
const ContainerItem = styled.View`
  width: ${screenWidth - 100}px;
  height: ${screenWidth - 60}px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
