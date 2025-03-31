import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Thực hiện xác thực (giả lập)
        if (email === 'test@gmail.com' && password === '123456') {
            navigation.navigate('Home'); // Chuyển đến màn hình Home
        } else {
            alert('Sai tài khoản hoặc mật khẩu!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            {/* Email */}
            <Text style={styles.label}>Email ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email here!"
                value={email}
                onChangeText={setEmail}
            />

            {/* Password */}
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password here!"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {/* Forgot Password */}
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Or Sign in With */}
            <Text style={styles.orText}>Or sign in with</Text>

            {/* Social Login */}
            <View style={styles.socialButtons}>
                <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#fff' }]}>
                    <Icon name="google" size={20} color="#DB4437" />
                    <Text style={styles.iconButtonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#3b5998' }]}>
                    <Icon name="facebook" size={20} color="#fff" />
                    <Text style={styles.iconButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>

            {/* Sign Up */}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signUpText}>Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    label: { alignSelf: 'flex-start', fontSize: 16, marginBottom: 5 },
    input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, fontSize: 16, marginBottom: 15 },
    forgotPassword: { alignSelf: 'flex-end', color: '#FF9800', marginBottom: 15, fontSize: 14 },
    signInButton: { width: '100%', padding: 15, backgroundColor: '#FF9800', borderRadius: 5, alignItems: 'center', marginBottom: 20 },
    signInButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    orText: { fontSize: 14, marginBottom: 10 },
    socialButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 },
    iconButton: { flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 5, flex: 1, justifyContent: 'center', marginHorizontal: 5 },
    iconButtonText: { marginLeft: 10, fontSize: 16, color: '#000' },
    signUpText: { fontSize: 14 },
    signUpLink: { color: '#FF9800', fontWeight: 'bold' },
});

export default LoginScreen;
