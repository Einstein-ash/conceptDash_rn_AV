import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../components/Header';
import { Dimensions } from 'react-native';
const { height : mobieScreenHeight } = Dimensions.get('window');


export const useHeaderLayout = () => {
  const insets = useSafeAreaInsets();


  const totalHeaderHeight = HEADER_HEIGHT + insets.top;
  const pageScreenHeight = mobieScreenHeight - totalHeaderHeight  ;

  return { totalHeaderHeight , pageScreenHeight };
};