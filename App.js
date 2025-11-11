// import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-red-600">Hola como estas jaja</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "blue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
