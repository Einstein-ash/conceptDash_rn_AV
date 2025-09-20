import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../components/Header';

export const useHeaderLayout = () => {
  const insets = useSafeAreaInsets();


  const totalHeaderHeight = HEADER_HEIGHT + insets.top;

  return { totalHeaderHeight };
};