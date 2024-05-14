import * as React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { paletteColors } from "../../constants/palette";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface CalculatorButtonProps extends TouchableOpacityProps {
  isEqualButton?: boolean;
}

export const CalculatorButton = ({
  children,
  isEqualButton = false,
  ...props
}: CalculatorButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, isEqualButton && styles.equalButton]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "22%",
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: paletteColors.secondary,
    margin: 4,
  },
  equalButton: {
    backgroundColor: paletteColors.primary,
  },
});
