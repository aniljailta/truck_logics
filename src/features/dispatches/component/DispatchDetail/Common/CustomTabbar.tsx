import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';

interface TabItem {
  key: string;
  title: string;
}

const tabs: TabItem[] = [
  {key: 'summary', title: 'Summary'},
  {key: 'checkCall', title: 'Check Call'},
  {key: 'docs', title: 'Docs'},
  {key: 'notes', title: 'Notes'},
];

const CustomTabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.key}
          style={[styles.tab, activeTab === tab.key && styles.activeTab]}
          onPress={() => setActiveTab(tab.key)}>
          <Text
            style={[
              styles.tabText,
              activeTab === tab.key && styles.activeTabText,
            ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomTabBar;
