import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Btn from "./components/Btn";
import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [sub, setsub] = useState(false);

  useEffect(() => {
    setsub(true);

    const time = setTimeout(() => {
      setsub(false);
    }, 250);

    return () => {
      clearTimeout(time);
    };
  }, [count]);

  function aumento() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.Text}>{count}</Text>
        <Text style={styles.Subtext}>{sub ? "+1" : " "}</Text>
      </View>
      <Btn text="+1" action={aumento} />
      <Btn text="reset" isleft action={reset} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#101010",
    alignItems: "center",
    justifyContent: "center",
  },

  containerText: {
    justifyContent: "center",
    alignItems: "center",
  },

  Text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },

  Subtext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
