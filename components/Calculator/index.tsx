import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CalculatorButton } from "./CalculatorButton";
import { buttons } from "../../constants/buttons";
import { styles } from "./styles";

export function Calculator() {
  // Estados para armazenar a expressão, o valor inicial e o valor final
  const [expression, setExpression] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");

  // Função para lidar com o pressionamento de um botão
  const handlePress = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearExpression();
    } else if (value === "Del") {
      deleteLastCharacter();
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  // Função para calcular o resultado da expressão
  const calculateResult = () => {
    try {
      const result = eval(expression.replace(/x/g, "*"));
      setInitialValue(expression);
      setFinalValue(result.toString());
      setExpression("");
    } catch (error) {
      setExpression("Error");
    }
  };

  // Função para limpar a expressão
  const clearExpression = () => {
    setExpression("");
    setInitialValue("");
    setFinalValue("");
  };

  // Função para deletar o último caractere da expressão
  const deleteLastCharacter = () => {
    setExpression((prevExpression) =>
      prevExpression.substring(0, prevExpression.length - 1)
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.resultContainer}>
          {/* Exibe a expressão, o valor inicial e o valor final */}
          <Text style={styles.resultText}>{initialValue}</Text>
          <Text style={styles.resultText}>{finalValue}</Text>
          <Text style={styles.resultText}>{expression}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {/* Renderiza os botões da calculadora */}
          {buttons.map((value) => (
            <CalculatorButton
              key={value}
              isEqualButton={value === "="}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </CalculatorButton>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
