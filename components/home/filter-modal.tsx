import React from "react";
import { Modal, Text, View } from "react-native";

const Filter = ({ open, setOpen, func }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      }}
      className="h-[250]"
    >
      <Modal visible={open} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
          className="border h-[120px]"
        >
          <Text>Large</Text>
          <Text>Medium</Text>
          <Text>Small</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Filter;
