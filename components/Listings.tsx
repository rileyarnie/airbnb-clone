import { Image, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { FlatList } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  listings: any[];
  category: string;
};

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(true);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
      console.log("listings", listings);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [category]);

  const renderItem: ListRenderItem<any> = ({ item }) => (
    // <Link href={`/listing/${item.id}`} asChild>
    <TouchableOpacity>
      <View style={styles.listing}>
        <Image source={{ uri: item.medium_url }} style={styles.image} />
      </View>
    </TouchableOpacity>
    // </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        ref={listRef}
        data={listings}
        // data={loading ? [] : listings}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  listing: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});
