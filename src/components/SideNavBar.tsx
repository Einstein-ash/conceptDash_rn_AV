import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from './Header'; 
import { navigate } from '../navigators/navigationUtils';

const { width } = Dimensions.get('window');

interface SideNavBarProps {
  isVisible: boolean;
  onClose: () => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ isVisible, onClose }) => {
  const handleNavigate = (screenName: string) => {
    navigate(screenName);
    onClose();
  };


  const slideAnim = useRef(new Animated.Value(width)).current;
  const insets = useSafeAreaInsets();

  const [showModal, setShowModal] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShowModal(true); 
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, { 
        toValue: width,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setShowModal(false); 
      });
    }
  }, [isVisible]);

  return (
    <Modal visible={showModal} transparent={true} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        <View
          style={[
            styles.header,
            {
              paddingTop: insets.top,
              height: HEADER_HEIGHT + insets.top,
            },
          ]}
        >
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="x" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>

      <View style={styles.menuItems}>
          {/* --- NEW: Use the handleNavigate function on each button --- */}
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('About')}>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('Expertise')}>
            <Text style={styles.menuText}>Expertise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('Projects')}>
            <Text style={styles.menuText}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('Stories')}>
            <Text style={styles.menuText}>Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('Careers')}>
            <Text style={styles.menuText}>Careers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('Contact')}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
      </View>
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
  menuItems: { marginTop: 20, paddingHorizontal: 20 },
  menuItem: { paddingVertical: 15 },
  menuText: { color: '#FFF', fontSize: 22, fontWeight: '500' },
});

export default SideNavBar;