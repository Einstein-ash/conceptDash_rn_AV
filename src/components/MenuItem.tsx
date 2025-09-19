import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  TextStyle 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import type { MenuItemData } from '../data/menuData';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type MenuItemProps = {
  item: MenuItemData;
  onNavigate: (screen: string) => void;
  onToggle: (title: string) => void;
  openMenus: string[];
  level: number;
};

const BASE_FONT_SIZE = 22;
const FONT_DECREMENT = 3;
const MIN_FONT_SIZE = 16;

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  onNavigate,
  onToggle,
  openMenus,
  level,
}) => {
  const isOpen = openMenus.includes(item.title);

  const handlePress = () => {
    if (item.submenu) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      onToggle(item.title);
    } else if (item.screen) {
      onNavigate(item.screen);
    }
  };

  const dynamicTextStyle : TextStyle = {
    fontSize: Math.max(BASE_FONT_SIZE - level * FONT_DECREMENT, MIN_FONT_SIZE),
    color: level > 0 ? '#D1D1D1' : '#FFFFFF',
    fontWeight: level > 0 ? '400' : '500',
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={dynamicTextStyle}>{item.title}</Text>
        {item.submenu && (
          <Icon
            name={isOpen ? 'chevron-down' : 'chevron-right'}
            size={22}
            color="#FFF"
          />
        )}
      </TouchableOpacity>
      {isOpen && item.submenu && (
        <View style={styles.submenuContainer}>
          {item.submenu.map(subItem => (
            <MenuItem
              key={subItem.title}
              item={subItem}
              onNavigate={onNavigate}
              onToggle={onToggle}
              openMenus={openMenus}
              level={level + 1}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  submenuContainer: {
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default MenuItem;