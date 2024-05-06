import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { paletteColors } from "../constants/palette";

type ResultViewProps = {
  result: number;
};

export const ResultView = ({ result }: ResultViewProps) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: paletteColors.secondary,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  text: {
    fontSize: 30,
    textAlign: "right",
    color: "white",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
});
