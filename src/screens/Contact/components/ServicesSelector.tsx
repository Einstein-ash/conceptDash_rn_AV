// import React from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

// const SERVICES = [
//   { name: 'General', icon: 'file-text' },
//   { name: 'Property and Building', icon: 'home' },
//   { name: 'Transport and Infrastructure', icon: 'truck' },
//   { name: 'Advisory Services', icon: 'compass' },
//   { name: 'Construction Services', icon: 'tool' },
//   { name: 'Water and Wastewater', icon: 'droplet' },
// ];

// type ServiceSelectorProps = {
//   selectedService: string;
//   onSelect: (service: string) => void;
// };

// const ServiceSelector: React.FC<ServiceSelectorProps> = ({ selectedService, onSelect }) => {
//   const renderItem = ({ item }: { item: typeof SERVICES[0] }) => {
//     const isSelected = item.name === selectedService;
//     return (
//       <TouchableOpacity
//         style={[styles.itemContainer, isSelected && styles.itemSelected]}
//         onPress={() => onSelect(item.name)}
//       >
//         <Icon name={item.icon} size={28} color={isSelected ? '#6A1B9A' : '#333'} />
//         <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
//           {item.name}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return <FlatList data={SERVICES} renderItem={renderItem} keyExtractor={(item) => item.name} numColumns={4} />;
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 15,
//     margin: 5,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#EAEAEA',
//   },
//   itemSelected: {
//     borderColor: '#6A1B9A',
//     backgroundColor: 'rgba(106, 27, 154, 0.05)',
//   },
//   itemText: {
//     marginTop: 8,
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#333',
//   },
//   itemTextSelected: {
//     color: '#6A1B9A',
//   },
// });

// export default ServiceSelector;
















// src/screens/Contact/components/ServiceSelector.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SERVICES = [
  { name: 'General', icon: 'file-text' },
  { name: 'Property and Building', icon: 'home' },
  { name: 'Transport and Infrastructure', icon: 'truck' },
  { name: 'Advisory Services', icon: 'compass' },
  { name: 'Construction Services', icon: 'tool' },
  { name: 'Water and Wastewater', icon: 'droplet' },
];

type ServiceSelectorProps = {
  selectedService: string;
  onSelect: (service: string) => void;
};

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ selectedService, onSelect }) => {
  return (
    <View style={styles.gridContainer}>
      {SERVICES.map((item) => {
        const isSelected = item.name === selectedService;
        return (
          <TouchableOpacity
            key={item.name}
            style={[styles.itemContainer, isSelected && styles.itemSelected]}
            onPress={() => onSelect(item.name)}
          >
            <Icon name={item.icon} size={28} color={isSelected ? '#6A1B9A' : '#333'} />
            <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '23%', // Roughly 4 columns with a small gap
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  itemSelected: {
    borderColor: '#6A1B9A',
    backgroundColor: 'rgba(106, 27, 154, 0.05)',
  },
  itemText: {
    marginTop: 8,
    fontSize: 11, // Adjusted for better fit
    textAlign: 'center',
    color: '#333',
  },
  itemTextSelected: {
    color: '#6A1B9A',
  },
});

export default ServiceSelector;