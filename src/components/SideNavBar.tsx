import React, { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, Animated, Dimensions, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from './Header';
import { navigate } from '../navigators/navigationUtils';
import { MENU_DATA, MenuItemData } from '../data/menuData';
import MenuItem from './MenuItem';

const { width } = Dimensions.get('window');

interface SideNavBarProps {
  isVisible: boolean;
  onClose: () => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ isVisible, onClose }) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const handleNavigate = (screenName: string) => {
    navigate(screenName);
    onClose();
  };

  const handleToggle = (title: string) => {
    const isCurrentlyOpen = openMenus.includes(title);

    const findSiblings = (target: string, menu = MENU_DATA): MenuItemData[] | null => {
      for (const item of menu) {
        if (item.submenu?.some(sub => sub.title === target)) {
          return item.submenu;
        }
        if (item.submenu) {
          const found = findSiblings(target, item.submenu);
          if (found) return found;
        }
      }
      return null;
    };

    if (isCurrentlyOpen) {
      setOpenMenus(prev => prev.filter(m => m !== title));
    } else {
      const siblings = findSiblings(title) || MENU_DATA;
      const siblingTitles = siblings.map(s => s.title);
      setOpenMenus(prev => [...prev.filter(m => !siblingTitles.includes(m)), title]);
    }
  };

  const slideAnim = useRef(new Animated.Value(width)).current;
  const insets = useSafeAreaInsets();
  const [showModal, setShowModal] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShowModal(true);
      Animated.timing(slideAnim, { toValue: 0, duration: 250, useNativeDriver: true }).start();
    } else {
      Animated.timing(slideAnim, { toValue: width, duration: 250, useNativeDriver: true }).start(() => {
        setShowModal(false);
        setOpenMenus([]);
      });
    }
  }, [isVisible]);

  return (
    <Modal visible={showModal} transparent={true} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        <View style={[styles.header, { paddingTop: insets.top, height: HEADER_HEIGHT + insets.top }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="x" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.menuItemsContainer} showsVerticalScrollIndicator={false}>
          {MENU_DATA.map((item) => (
            <MenuItem
              key={item.title}
              item={item}
              onNavigate={handleNavigate}
              onToggle={handleToggle}
              openMenus={openMenus}
              level={0}
            />
          ))}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)' },
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '85%',
    backgroundColor: '#1C1C1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#111',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  closeButton: { padding: 5 },
  menuItemsContainer: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
});

export default SideNavBar;