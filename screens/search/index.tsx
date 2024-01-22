import React from "react";
import Container from "../../components/container";
import SearchBar from "../../components/home/search-bar";
import { View } from "react-native";
import HotSpotCard from "../../components/home/hotspot-card";

const Search = ({ navigation, route }: any) => {
  return (
    <Container navigation={navigation} route={route}>
      <SearchBar />
      <View className="w-full mt-4  flex justify-between flex-row flex-wrap flex-1">
        {Array(12)
          .fill("_")
          .map((items) => (
            <HotSpotCard />
          ))}
      </View>
    </Container>
  );
};

export default Search;
