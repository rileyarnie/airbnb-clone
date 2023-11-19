import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";
import Categories from "@/constants/Categories";
import * as haptics from "expo-haptics";

type Props = {
  onCategoryChanged: (category: string) => void;
};

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const seletedElement = itemsRef.current[index];
    setActiveIndex(index);

    seletedElement?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });

    haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(Categories[index].name);
  };

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <View style={styles.container}>
        <View style={styles.actions}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={20} color="black" />
              <View>
                <Text style={{ fontFamily: "Montserrat-semibold" }}>
                  Where to?
                </Text>
                <Text
                  style={{ fontFamily: "Montserrat", color: COLORS.lightGray }}
                >
                  Anywhere · Any week · Add Guests
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 16,
          }}
        >
          {Categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              style={
                activeIndex === index
                  ? styles.activeCategoryButton
                  : styles.categoryButton
              }
              onPress={() => selectCategory(index)}
            >
              <MaterialIcons
                name={item.icon as any}
                size={24}
                color={activeIndex === index ? "#000" : "#c2c2c2"}
              />
              <Text
                style={
                  activeIndex === index
                    ? styles.activeCategoryText
                    : styles.categoryText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  safeAreaStyles: {
    // flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    backgroundColor: "#fff",
    height: "auto",
    // paddingBottom: 16,
    // height: 100,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 15,
  },
  searchButton: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    elevation: 2,
    shadowRadius: 8,
    borderRadius: 30,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#000",
    shadowOpacity: 0.12,
  },
  filterButton: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
    borderRadius: 50,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "Montserrat-semibold",
    color: "#c2c2c2",
  },
  activeCategoryText: {
    fontSize: 14,
    fontFamily: "Montserrat-semibold",
    color: "#000",
  },
  categoryButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  activeCategoryButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});
