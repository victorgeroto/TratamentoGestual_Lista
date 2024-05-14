import { FlatList, View, Text } from "react-native";
import React from "react";

const data = [
  { id: '1', title: 'item 1'},
  { id: '2', title: 'item 2'},
  { id: '3', title: 'item 3'},
  { id: '4', title: 'item 4'},
  { id: '5', title: 'item 5'},
  { id: '6', title: 'item 6'},
  // Adicione mais itens conforme necessário
];

export default function listaSimples(){
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
      <Text>{item.title}</Text>
    </View>
  );

  return(
    <FlatList
    horizontal
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
  );
}