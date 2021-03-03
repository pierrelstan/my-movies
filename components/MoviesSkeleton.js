import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function MoviesSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor='#444' highlightColor='#666'>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ width: 100, height: 150, margin: 5 }} />
        <View style={{ width: 100, height: 150, margin: 5 }} />
        <View style={{ width: 100, height: 150, margin: 5 }} />
        <View style={{ width: 70, height: 150, margin: 5 }} />
      </View>
    </SkeletonPlaceholder>
  );
}
