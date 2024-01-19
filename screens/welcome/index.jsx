import React, { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import SidesItems from "../../components/common/slide-items";
import CustomImage from "../../assets/welcome/welcome1.png";
const WelcomEScreen = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    navigation.navigate("/register");
  };

  const SkipButton = () => {
    return (
      <Pressable
        onPress={onSkip}
        className=" mt-5 float-right  w-[360]  absolute  text-2xl  "
      >
        <Text className=" w-full text-[#FBDE3F] text-sm  text-right">Skip</Text>
      </Pressable>
    );
  };

  const slides = [
    {
      title: "Trending Foods",
      source: require("../../assets/welcome/welcome1.png"),
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam. ",
    },
    {
      title: "Fast Delivery ",
      source: require("../../assets/welcome/welcome2.png"),
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam. ",
    },
    {
      title: "Find Nearby Restaurants",
      source: require("../../assets/welcome/welcome3.png"),
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam. ",
    },
    {
      title: "Easy Ordering",
      source: require("../../assets/welcome/welcome4.png"),
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam. ",
    },
  ];

  const RenderItem = ({ item }) => {
    return <SidesItems item={item} />;
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      onSkip={onSkip}
      dotStyle={{ backgroundColor: "yellow" }}
      showNextButton={false}
      renderSkipButton={() => <SkipButton />}
      showSkipButton={true}
      showDoneButton={true}
    />
  );
};

export default WelcomEScreen;
