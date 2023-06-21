import * as Font from "expo-font";

export const useFonts = async () => {
  await Font.loadAsync({
    'Orbitron-Regular': require("../assets/fonts/Orbitron/Orbitron-Regular.ttf"),
    'Orbitron-Bold': require("../assets/fonts/Orbitron/Orbitron-Bold.ttf"),
    'Orbitron-ExtraBold': require("../assets/fonts/Orbitron/Orbitron-ExtraBold.ttf"),
    'Orbitron-Medium': require("../assets/fonts/Orbitron/Orbitron-Medium.ttf"),
  });
};