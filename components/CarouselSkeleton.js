import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function CarouselSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor="#383958" highlightColor="#666">
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <View
          style={{
            width: 220,
            height: 350,
          }}
        />
      </View>
    </SkeletonPlaceholder>
  );
}
