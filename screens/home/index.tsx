import React from "react";
import Container from "../../components/container";
import { ScrollView, ScrollViewComponent, Text, View } from "react-native";
import TopHeader from "../../components/home/top-header";
import SearchBar from "../../components/home/search-bar";
import TopMenuCard from "../../components/home/topmenu-card";
import FeaturedCard from "../../components/home/featured-card";
import HotSpotCard from "../../components/home/hotspot-card";

const Home = () => {
  return (
    <Container>
      <TopHeader />
      <SearchBar />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-8"
      >
        <View className="flex flex-row ">
          {Array(10)
            .fill("_")
            .map((items) => (
              <TopMenuCard />
            ))}
        </View>
      </ScrollView>
      <Text className="text-xl mt-4 font-semibold">
        Featured on Super Foodoo
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
      >
        <View className="flex  flex-row ">
          {Array(10)
            .fill("_")
            .map((items) => (
              <FeaturedCard />
            ))}
        </View>
      </ScrollView>
      <Text className="text-xl mt-4 font-semibold">Hot spots</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
      >
        <View className="flex  flex-row ">
          {Array(10)
            .fill("_")
            .map((items) => (
              <HotSpotCard />
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
