import React, { useState } from "react";
import { Text, View, ScrollView, TextInput, Pressable, Alert, Image, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import axios from "axios";
import CONFIG from '../../../../config.js';

// Caminho da imagem
const logoImage = require('../../../../assets/images/sellere2.jpg');

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`${CONFIG.url_api}usuarios`, {
        params: {
          username,
          password,
        },
      });
  
      // Obtendo o usuário retornado pela API
      const user = response.data;
  
      if (user) {
        Alert.alert('Login', `Bem-vindo, ${user.role}!`);
        console.log(`Login bem-sucedido! Bem-vindo, ${user.role}!`);
  
        // Redirecionando com base no papel do usuário
        if (user.role === 'Master') {
          router.push('/pages/master'); // Tela Master
        } else if (user.role === 'Representante') {
          router.push('/pages/representantes'); // Tela Representante
        // } else if (user.role === 'Vendedor') {
          // router.push('/pages/vendedor'); // Tela Vendedor
        }
      } else {
        Alert.alert("Erro", "Usuário ou senha incorretos");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível realizar o login");
    }
  };
  


  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    padding: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


// import React, { useState } from "react";
// import { Text, View, ScrollView, TextInput, Pressable, Alert } from "react-native";
// import { useRouter } from 'expo-router';
// import axios from "axios";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get("http://192.168.1.29:3000/usuarios", {
//         params: {
//           username,
//           password,
//         },
//       });

//       const user = response.data.find(
//         (u: any) => u.username === username && u.password === password
//       );

//       if (user) {
//         Alert.alert("Login", `Bem-vindo, ${user.role}!`);
//         console.log(`Login bem-sucedido! Bem-vindo, ${user.role}!`);
//         router.push('/pages/master'); // Navegando para a tela Master
//       } else {
//         Alert.alert("Erro", "Usuário ou senha incorretos");
//       }
//     } catch (error) {
//       Alert.alert("Erro", "Não foi possível realizar o login");
//     }
//   };

//   return (
//     <ScrollView
//       style={{ flex: 1 }}
//       className="bg-slate-200"
//       showsVerticalScrollIndicator={false}
//     >
//       <View className="w-full px-4">
//         <View className="mt-10">
//           <Text className="text-2xl font-bold text-gray-800 text-center mb-6">
//             Login
//           </Text>

//           <TextInput
//             style={{ padding: 16 }}
//             className="bg-white rounded mb-4 text-lg"
//             placeholder="Usuário"
//             value={username}
//             onChangeText={setUsername}
//           />

//           <TextInput
//             style={{ padding: 16 }}
//             className="bg-white rounded mb-4 text-lg"
//             placeholder="Senha"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />

//           <Pressable
//             style={{ padding: 16 }}
//             className="bg-teal-500 rounded mt-4"
//             onPress={handleLogin}
//           >
//             <Text className="text-center text-white text-lg font-bold">
//               Login
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
