import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";

type Props = {};

const Explore = (props: Props) => {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(() => listingsData, []);

  const onSelectCategory = (categoryName: string) => {
    setCategory(categoryName);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onSelectCategory} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
