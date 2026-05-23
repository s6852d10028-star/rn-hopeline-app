import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const hopeline = require("@/assets/images/hopeline.2.png");
const googleIcon = require("@/assets/images/google.png");
const facebookIcon = require("@/assets/images/facebook.png");
const xIcon = require("@/assets/images/twitter.png");

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerLogo}>
          <Image source={hopeline} style={styles.hopelinelogo} />
        </View>

        <Text style={styles.title}>Create your Account</Text>

        {/* ฟอร์มกรอกข้อมูล */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Sign In */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.line} />
        </View>

        {/* ปุ่ม Social Media */}
        <View style={styles.socialContainer}>
          {/* ปุ่ม Google */}
          <TouchableOpacity style={styles.socialCircle}>
            <Image
              source={googleIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* ปุ่ม Facebook */}
          <TouchableOpacity style={styles.socialCircle}>
            <Image
              source={facebookIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* ปุ่ม X */}
          <TouchableOpacity style={styles.socialCircle}>
            <Image
              source={xIcon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* ลิงก์ย้อนกลับไปหน้าเข้าสู่ระบบ */}
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLogo: {
    alignItems: "center",
  },
  hopelinelogo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
  },
  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#3B004E",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 35,
  },
  socialCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: "#000",
    fontSize: 13,
  },
  footerLink: {
    color: "#3B004E",
    fontSize: 13,
    fontWeight: "bold",
  },
});
