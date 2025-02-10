import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import CONFIG from '../../../../../config.js';
interface Usuario {
  id: string;
  username: string;
  role: string;
}

export default function Representantes() {
  const [representantes, setRepresentantes] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Carregue os dados do arquivo JSON
    axios.get(`${CONFIG.url_api}usuarios`)
      .then(response => {
        console.log('Resposta da API:', response.data); // Adiciona o log para inspecionar a estrutura
        
        // Filtrar representantes
        const usuariosRepresentantes = response.data.filter((user: Usuario) => user.role === 'Representante');
        setRepresentantes(usuariosRepresentantes);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: Usuario }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.username}</Text> {/* Exibe o nome de usuário */}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.itemText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {representantes.length > 0 ? (
        <FlatList
          data={representantes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noDataText}>Nenhum representante encontrado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 16,
  },
  item: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  noDataText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// export default function Representantes() {
//   const [representantes, setRepresentantes] = useState<any[]>([]);

//   useEffect(() => {
//     // Carregue os dados do arquivo JSON
//     axios.get('http://192.168.1.29:3000/usuarios')
//       .then(response => {
//         // Filtre os usuários com o papel de "Representante"
//         const usuariosRepresentantes = response.data.usuarios.filter((user: any) => user.role === 'Representante');
//         setRepresentantes(usuariosRepresentantes);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   const renderItem = ({ item }: { item: any }) => (
//     <View style={styles.item}>
//       <Text style={styles.itemText}>{item.username}</Text> {/* Exibe o nome de usuário */}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={representantes}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()} // Usa o ID como chave
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F1F5F9',
//     padding: 16,
//   },
//   item: {
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   itemText: {
//     fontSize: 16,
//     color: '#333',
//   },
// });