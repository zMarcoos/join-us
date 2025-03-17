import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Properties = {
  name: string;
  onRemove: VoidFunction;
};

export function Participant({ name, onRemove }: Properties) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}