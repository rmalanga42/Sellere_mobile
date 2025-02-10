import React from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import { useRouter } from 'expo-router'; // Importando o hook correto
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <View className="mt-10">
          <Text className="text-2xl font-bold text-gray-800 text-center mb-6">
            Bem-vindo ao Sellere
          </Text>

          <Pressable
            style={{ padding: 16 }}
            className="bg-teal-500 rounded mb-4"
            onPress={() => router.push('/pages/login')} // Corrigido
          >
            <Text className="text-center text-white text-lg font-bold">
              Entrar
            </Text>
          </Pressable>

          <Pressable
            style={{ padding: 16 }}
            className="bg-blue-500 rounded"
            onPress={() => router.push('/pages/about')} // Corrigido
          >
            <Text className="text-center text-white text-lg font-bold">
              Conheça a Sellere
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}



// import { Text, View, ScrollView } from "react-native";
// import Constants from 'expo-constants'
// import { Header } from "../components/header";


// const statusBarHeight = Constants.statusBarHeight;

// export default function Index() {
//   return (
//     <ScrollView 
//       style={{ flex: 1 }} 
//       className="bg-slate-200" 
//       showsVerticalScrollIndicator={false}
//     >
//       <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
//         <Header/>

//       </View>
//     </ScrollView>
//   );
// }
