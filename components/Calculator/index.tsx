import React from "react";
import { CalculatorButton } from "./CalculatorButton";
import { StyleSheet, View } from "react-native";
import { paletteColors } from "../../constants/palette";

export function Calculator() {
  return (
    <View style={styles.container}>
      <CalculatorButton>%</CalculatorButton>
      <CalculatorButton>C</CalculatorButton>
      <CalculatorButton>??</CalculatorButton>
      <CalculatorButton>Del</CalculatorButton>
      <CalculatorButton>7</CalculatorButton>
      <CalculatorButton>8</CalculatorButton>
      <CalculatorButton>9</CalculatorButton>
      <CalculatorButton>x</CalculatorButton>
      <CalculatorButton>4</CalculatorButton>
      <CalculatorButton>5</CalculatorButton>
      <CalculatorButton>6</CalculatorButton>
      <CalculatorButton>-</CalculatorButton>
      <CalculatorButton>1</CalculatorButton>
      <CalculatorButton>2</CalculatorButton>
      <CalculatorButton>3</CalculatorButton>
      <CalculatorButton>+</CalculatorButton>
      <CalculatorButton>??</CalculatorButton>
      <CalculatorButton>0</CalculatorButton>
      <CalculatorButton>,</CalculatorButton>
      <CalculatorButton variant="result">=</CalculatorButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paletteColors.tertiary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 4,
  },
});
