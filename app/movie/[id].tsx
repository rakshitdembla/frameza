import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function id() {
  const movieId = useLocalSearchParams();

  return (
    <View>
      <Text>Hey Movie Id</Text>
    </View>
  );
}
