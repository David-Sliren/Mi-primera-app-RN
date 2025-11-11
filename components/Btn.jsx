import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

const Btn = ({ text = "", isleft, action }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        isleft ? { left: 0 } : { right: 0 },
        pressed && { opacity: 0.8 },
      ]}
      onPress={action}
    >
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    alignSelf: "flex-end",
    marginHorizontal: 10,
    marginBottom: 90,
    backgroundColor: "#0f0fdf",
    paddingHorizontal: 22,
    paddingVertical: 20,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  btnText: {
    fontSize: 15,
    fontWeight: 600,
    color: "white",
  },
});

export default Btn;
