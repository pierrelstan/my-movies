import React from "react";
import { FlatList, SafeAreaView } from "react-native";

export default function List(props) {
  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <props.item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        refreshing={props.refreshing}
        onEndReachedThreshold={props.onEndReachedThreshold}
        initialNumToRender={props.initialNumToRender}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
