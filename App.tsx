import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Calculator } from "./components/Calculator";
import { useState } from "react";
import { Divider } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fullScreen}>
        <Divider />
        <View style={styles.calculatorContainer}></View>
        <Calculator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  fullScreen: {
    height: Dimensions.get("window").height,
  },
  resultContainer: {
    marginLeft: "auto",
    width: "100%",
    height: "30%",
  },
  calculatorContainer: {},
});
