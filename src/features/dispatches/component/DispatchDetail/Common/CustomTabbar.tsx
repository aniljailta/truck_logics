import React from 'react';
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

interface CustomTabBarProps {
  activeTab: string;
  onChangeTab: (tabKey: string) => void;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  activeTab,
  onChangeTab,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.key}
          style={[styles.tab, activeTab === tab.key && styles.activeTab]}
          onPress={() => onChangeTab(tab.key)}>
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
