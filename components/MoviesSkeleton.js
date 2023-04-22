import React from 'react';
import { View, Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const screenWidth = Dimensions.get('window').width;

export default function MoviesSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor='#383958' highlightColor='#666'>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
      </View>
    </SkeletonPlaceholder>
  );
}
