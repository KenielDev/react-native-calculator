import * as React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { paletteColors } from "../../constants/palette";

type CalculatorButtonProps = {
  variant?: "operate" | "digit" | "result";
} & ButtonProps;

export const CalculatorButton = ({
  children,
  variant = "digit",
  ...props
}: CalculatorButtonProps) => {
  const variantButtonStyles = {
    operate: {
      backgroundColor: paletteColors.black,
      textColor: "#fff",
      borderRadius: 2,
    },
    digit: {
      backgroundColor: paletteColors.primary,
      textColor: "#fff",
      borderRadius: 2,
    },
    result: {
      backgroundColor: paletteColors.secondary,
      textColor: "#fff",
      borderRadius: 2,
    },
  };

  return (
    <Button
      textColor={variantButtonStyles[variant].textColor}
      style={variantButtonStyles[variant]}
      {...props}
      mode="contained"
    >
      {children}
    </Button>
  );
};
