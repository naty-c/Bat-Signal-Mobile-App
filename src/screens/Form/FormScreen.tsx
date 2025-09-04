import React, { useState } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";
import BatButton from "../../components/BatButton/BatButton";
import BatInput from "../../components/BatInput/BatInput";
import styles from "./FormScreenStyle";

export default function FormScreen({ onBack }: { onBack: () => void }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [note, setNote] = useState("");
    
    const handleSend = () => {
        Alert.alert(`🦇 Bat-Signal sent!\n Batman is coming, ${name}`);
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.formHeader}>
                <Image 
                source={require("../../assets/batman-bat-logo.png")}
                style={styles.smallBatLogo} />
            </View>

            <Text style={styles.formTitle}>Share your coordinates with Batman</Text>

            <View style={styles.formField}>
                <Text style={styles.label}>Name:</Text>
                <BatInput
                    placeholder="Bruce Wayne"
                    placeholderTextColor="#9AA0A6"
                    accessibilityLabel="Name input field"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Phone:</Text>
                <BatInput
                    placeholder="Call me at..."
                    placeholderTextColor="#9AA0A6"
                    keyboardType="phone-pad"
                    accessibilityLabel="Phone input field"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Location:</Text>
                <BatInput
                    placeholder="Gotham City, Downtown"
                    placeholderTextColor="#9AA0A6"
                    accessibilityLabel="Location input field"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Note:</Text>
                <BatInput
                    placeholder="Describe the situation..."
                    placeholderTextColor="#9AA0A6"
                    accessibilityLabel="Note input field"
                    multiline
                    numberOfLines={4}
                    value={note}
                    onChangeText={setNote}
                    style={{ height: 80 }}
                />
            </View>

            <BatButton title="Send Bat-Signal" onPress={handleSend} style={styles.sendBtn} />

            <TouchableOpacity onPress={onBack}>
                <Text style={styles.backText}>🦇 Back to the Batcave</Text>
            </TouchableOpacity>
        </View>
    )
}