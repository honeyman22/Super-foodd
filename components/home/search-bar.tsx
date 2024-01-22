import React, { useState } from "react";
import { Modal, Pressable, TextInput, View } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/MaterialIcons";
//@ts-ignore
import Icon1 from "react-native-vector-icons/FontAwesome";
import Filter from "./filter-modal";

const SearchBar = () => {
  const [openfilter, setOpenFilter] = useState(false);
  return (
    <View
      style={{ backgroundColor: "rgba(229, 229, 229, 0.46)" }}
      className="w-full h-14 flex items-center justify-between flex-row rounded-full mt-6 px-6 "
    >
      <Icon name="search" size={24} />
      <TextInput className="w-[200px] text-base   " />
      <Pressable onPress={() => setOpenFilter(true)}>
        <Icon1 name="filter" className="border-l" size={20} />
      </Pressable> 
      {/* <Filter open={openfilter} setOpen={setOpenFilter} /> */}
    </View>
  );
};

export default SearchBar;
