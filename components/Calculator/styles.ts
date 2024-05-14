import { StyleSheet } from "react-native";
import { paletteColors } from "../../constants/palette";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paletteColors.tertiary,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  resultContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
  },
  resultText: {
    fontSize: 32,
    color: paletteColors.white,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  equalButton: {
    backgroundColor: paletteColors.primary,
  },
  buttonText: {
    fontSize: 24,
    color: paletteColors.white,
  },
});
