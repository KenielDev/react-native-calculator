import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ResultView } from "./components/ResultView";
import { CalculatorButton } from "./components/Calculator/CalculatorButton";
import { Calculator } from "./components/Calculator";
import { useState } from "react";
import { Divider } from "react-native-paper";

export default function App() {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.fullScreen}>
        <View style={styles.resultContainer}>
          <ResultView result={result} />
        </View>
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
