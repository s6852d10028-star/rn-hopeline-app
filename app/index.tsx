import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

const hopeline = require("@/assets/images/hopeline.png");

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    //หน่วงเวลา 3 วินาทีแล้วเปลี่ยนไปหน้า signin
    const timer = setTimeout(() => {
      router.replace("/signin");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <Image source={hopeline} style={styles.hopelinelogo} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B004E",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 24,
    alignItems: "center",
    width: 325,
    height: 335,
  },
  hopelinelogo: {
    width: 280,
    height: 280,
  },
});
