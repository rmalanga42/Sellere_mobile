import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4">
        <View className="mt-10">
          <Text className="text-2xl font-bold text-gray-800 text-center mb-6">
            Conheça a Sellere
          </Text>

          <Text className="text-lg text-gray-600">
            Aqui você encontrará informações sobre o aplicativo Sellere e como se juntar à nossa equipe.
          </Text>

          {/* Adicione mais informações conforme necessário */}
        </View>
      </View>
    </ScrollView>
  );
}