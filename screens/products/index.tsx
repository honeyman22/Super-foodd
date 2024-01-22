import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
//@ts-ignore
import Icon1 from "react-native-vector-icons/MaterialIcons";
import ColorOptions from "../../components/products/color-options";
import { CustomButton } from "../../components/common/custom-button";
import CustomDropDown from "../../components/common/custom-dropdown";
import ReviewCard from "../../components/products/review-card";
const ProductDetails = ({ navigation }: any) => {
  const [opencolor, setOpenColor] = useState(false);
  const [selectedcolor, setSelectedColor] = useState("black");
  const [selectedsize, setSelectedSize] = useState("38");
  const [opensize, setOpenSize] = useState(false);
  const colors = ["black", "red", "blue", "green", "yellow", "brown"];
  const sizes = ["34", "36", "38", "40", "42", "46"];
  return (
    <View style={{ flex: 1 }} className="h-screen  ">
      <ScrollView style={{ flex: 1 }}>
        <ScrollView
          horizontal
          centerContent
          pagingEnabled
          className="  h-[230px] mt-4 w-full"
        >
          {Array(5)
            .fill("_")
            .map((items) => (
              // <View className="w-[100vs] flex border items-center justify-center">
              <Image
                source={require("../../assets/deleteable/shoe.png")}
                className="h-[230px] w-[100vw]  object-contain"
              />
              // </View>
            ))}
        </ScrollView>
        <View className="w-full flex px-4 mt-6 flex-row  justify-between">
          <Text className="text-center  text-gray-500  ">Men's Shoe</Text>
          <View className="flex flex-row space-x-1">
            <Icon1 name="star" size={16} color="#FDB600" />
            <Text className="text-center  text-gray-500  ">(4.6)</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-baseline px-4 justify-between">
          <Text className="text-center font-medium text-[26px] ">
            Nike Air Max
          </Text>
          <Text className="text-center text-lg  ">$20.99</Text>
        </View>

        <View className="px-4">
          <CustomDropDown
            title="Select Color"
            component={
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex flex-row"
              >
                {colors?.map((color) => (
                  <ColorOptions
                    color={color}
                    selected={selectedcolor}
                    handlePress={() => setSelectedColor(color)}
                  />
                ))}
              </ScrollView>
            }
          />
          <CustomDropDown
            title="Select Size"
            component={
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex flex-row"
              >
                {sizes?.map((color) => (
                  <ColorOptions
                    color={color}
                    selected={selectedsize}
                    handlePress={() => setSelectedSize(color)}
                  />
                ))}
              </ScrollView>
            }
          />
          <CustomDropDown
            title="Description"
            component={
              <Text>
                The Nike Air Zoom Pegasus 38, a popular running shoe, seamlessly
                blends comfort and performance. Its breathable mesh upper
                provides ventilation, while the Flywire cables ensure a snug fit
                and stability. The shoe features a responsive and cushioned
                midsole, thanks to the Nike Zoom Air unit, promoting a smooth
                and energized run. The waffle-patterned rubber outsole enhances
                traction, making it suitable for various surfaces. With a sleek
                design, dynamic color options, and the iconic Nike Swoosh, the
                Air Zoom Pegasus 38 combines style and functionality for runners
                seeking a reliable and stylish companion on their runs.
              </Text>
            }
          />
          <CustomDropDown
            title="Delivery and Returns"
            component={<ReviewCard />}
          />
          <CustomDropDown title="See Reviews" component={<ReviewCard />} />
        </View>
      </ScrollView>
      <View className="bg-whit mt-5 px-4">
        <CustomButton name="add to cart" />
      </View>
    </View>
  );
};

export default ProductDetails;
