// import React from 'react';
// import { Text, View } from 'react-native';

// export default function Master() {
//   return (
//     <View className="flex-1 justify-center items-center bg-gray-200">
//       <Text className="text-xl font-bold">Página Principal</Text>
//     </View>
//   );
// }

import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Master() {
  const router = useRouter();

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-gray-200"
    >
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-xl font-bold mb-4">Página Principal - Master</Text>
        <Button
          title="Ver Representantes"
          onPress={() => router.push('/pages/master/representantes')}
        />
      </View>
    </ScrollView>
  );
}