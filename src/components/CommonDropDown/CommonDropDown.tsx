import ArrowDown from '@/assets/svg/ArrowDown';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import styles from './Styles';

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (item: Option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({options, onSelect}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const toggleDropdown = (): void => {
    setVisible(!visible);
  };

  const onItemPress = (item: Option): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}: {item: Option}): React.ReactElement => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): React.ReactElement | null => {
    if (visible) {
      return (
        <Modal visible={visible} transparent animationType="none">
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setVisible(false)}>
            <View style={styles.dropdown}>
              <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
      {renderDropdown()}
      {/* <Text style={styles.hintText}>{hint}</Text> */}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || 'All Dispatches'}
      </Text>
      <ArrowDown />
    </TouchableOpacity>
  );
};

export default CustomDropdown;
