// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Footer from '../../components/Footer';
// import { HEADER_HEIGHT } from '../../components/Header';

// const { width, height: screenHeight } = Dimensions.get('window');

// const TABS_DATA = [
//   {
//     key: 'planning',
//     title: 'Project Planning & Scheduling',
//     description: 'At Concept Dash, precise project planning and scheduling are key to successful delivery. Our expert team of over 150 professionals uses advanced tools and methodologies to develop realistic timelines, allocate resources efficiently, and manage critical paths. We continuously monitor progress to adapt and mitigate delays, ensuring projects are completed on time and within budget while meeting all quality standards.',
//     images: [
//       { caption: 'Planning', source: require('../../assets/images/expertise/construction_pm_planning.png') },
//       { caption: 'Scheduling', source: require('../../assets/images/expertise/construction_pm_scheduling.png') },
//     ],
//   },
//   {
//     key: 'cost',
//     title: 'Cost Control & Estimating',
//     description: 'Cost control is vital. Our team provides accurate cost estimates and diligent budget management throughout the project lifecycle to ensure financial predictability and value.',
//     images: [],
//   },
//   {
//     key: 'quality',
//     title: 'Quality Management',
//     description: 'We are committed to the highest standards of quality. Our quality management systems ensure that all project deliverables meet or exceed client expectations and regulatory requirements.',
//     images: [],
//   },
// ];

// const ConstructionProjectManagementScreen: React.FC = () => {
//   const [activeTabKey, setActiveTabKey] = useState(TABS_DATA[0].key);

//   const activeTabData = TABS_DATA.find(tab => tab.key === activeTabKey);

//   const Tab = ({ title, tabKey }: { title: string; tabKey: string }) => {
//     const isActive = activeTabKey === tabKey;
//     return (
//       <TouchableOpacity
//         style={[styles.tab, isActive && styles.tabActive]}
//         onPress={() => setActiveTabKey(tabKey)}
//       >
//         {isActive && <Text style={styles.tabArrow}>&lt;</Text>}
//         <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <ScrollView
//       style={styles.container}
//       showsVerticalScrollIndicator={false}
//       pagingEnabled={true}
//     >
//       <View style={styles.pageContainer}>
//         <ImageBackground
//           source={require('../../assets/images/expertise/construction_hero.jpg')}
//           style={styles.hero}
//         >
//           {/* <LinearGradient
//             colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
//             style={styles.heroGradient}
//           /> */}
//           <Text style={styles.heroText}>Construction</Text>
//         </ImageBackground>

//         <View style={styles.mainContent}>
//           <View style={styles.breadcrumbContainer}>
//             <Text style={styles.breadcrumbText}>Home &gt; Expertise &gt; Construction &gt; </Text>
//             <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>Project Management</Text>
//           </View>
//           <Text style={styles.title}>Project Management</Text>
//           <Text style={styles.description}>
//             Our expert project management team ensures seamless execution of engineering and infrastructure projects across Ontario. With over 150 skilled professionals, we deliver projects on time, within budget, and to the highest standards. From planning to completion, our proven methodology drives efficiency, innovation, and client satisfaction every step of the way.
//           </Text>
//         </View>
//       </View>

//       <View style={styles.pageTwoContainer}>
//         <View style={styles.tabsSection}>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
//             {TABS_DATA.map(tab => (
//               <Tab key={tab.key} title={tab.title} tabKey={tab.key} />
//             ))}
//           </ScrollView>
//         </View>

//         <ScrollView
//           style={styles.tabContentScrollView}
//           contentContainerStyle={styles.tabContentContainer}
//           showsVerticalScrollIndicator={false}
//         >
//           {activeTabData && (
//             <>
//               <Text style={styles.tabContentTitle}>{activeTabData.title}</Text>
//               <Text style={styles.tabContentDescription}>{activeTabData.description}</Text>
//               <View style={styles.imagesRow}>
//                 {activeTabData.images.map(img => (
//                   <View key={img.caption} style={styles.imageCard}>
//                     <ImageBackground source={img.source} style={styles.image} imageStyle={{ borderRadius: 12 }}>
//                       <LinearGradient
//                         colors={['transparent', 'rgba(90, 34, 153, 0.8)']}
//                         style={styles.imageGradient}
//                       >
//                         <Text style={styles.imageCaption}>{img.caption}</Text>
//                       </LinearGradient>
//                     </ImageBackground>
//                   </View>
//                 ))}
//               </View>
//             </>
//           )}
//         </ScrollView>
//         <Footer />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop : HEADER_HEIGHT,
//   },
//   pageContainer: {
//     width: width,
//     height: screenHeight - HEADER_HEIGHT,
//     // paddingTop:10,
//   },
//   pageTwoContainer: {
//     width: width,
//     height: screenHeight - HEADER_HEIGHT,
//     // paddingTop:10,
//   },
//   hero: {
//     width: '100%',
//     height: '60%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   heroText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   mainContent: {
//     flex: 1,
//     padding: 25,
//     transform: [{ translateY: -150 }],
//     backgroundColor: '#FFFFFF',
//   },
//   breadcrumbContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 25,
//   },
//   breadcrumbText: {
//     color: '#8E8E93',
//     fontSize: 14,
//   },
//   breadcrumbActive: {
//     color: '#1C1C1E',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1C1C1E',
//     marginBottom: 15,
//   },
//   description: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#333333',
//   },
//   tabsSection: {
//     backgroundColor: '#111111',
//     paddingVertical: 15,
//   },
//   tabsContainer: {
//     paddingHorizontal: 25,
//   },
//   tab: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     marginRight: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
//   tabActive: {
//     backgroundColor: '#FFFFFF',
//   },
//   tabArrow: {
//     color: '#111111',
//     marginRight: 8,
//     fontSize: 12,
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   tabTextActive: {
//     color: '#111111',
//   },
//   tabContentScrollView: {
//     flex: 1,
//     backgroundColor: '#F5F5F7',
//   },
//   tabContentContainer: {
//     padding: 25,
//     paddingTop: 40,
//   },
//   tabContentTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1C1C1E',
//     marginBottom: 15,
//   },
//   tabContentDescription: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#333333',
//     marginBottom: 30,
//   },
//   imagesRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   imageCard: {
//     width: '48%',
//     borderRadius: 12,
//     elevation: 8,
//     shadowColor: '#6A1B9A',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   image: {
//     width: '100%',
//     height: 220,
//     justifyContent: 'flex-end',
//   },
//   imageGradient: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     borderRadius: 12,
//     padding: 10,
//   },
//   imageCaption: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
// });

// export default ConstructionProjectManagementScreen;












import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../../components/Footer';
import { HEADER_HEIGHT } from '../../components/Header';

const { width, height: screenHeight } = Dimensions.get('window');

const TABS_DATA = [
  {
    key: 'planning',
    title: 'Project Planning & Scheduling',
    description: 'At Concept Dash, precise project planning and scheduling are key to successful delivery. Our expert team of over 150 professionals uses advanced tools and methodologies to develop realistic timelines, allocate resources efficiently, and manage critical paths. We continuously monitor progress to adapt and mitigate delays, ensuring projects are completed on time and within budget while meeting all quality standards.',
    images: [
      { caption: 'Planning', source: require('../../assets/images/expertise/construction_pm_planning.png') },
      { caption: 'Scheduling', source: require('../../assets/images/expertise/construction_pm_scheduling.png') },
    ],
  },
  {
    key: 'cost',
    title: 'Cost Control & Estimating',
    description: 'Cost control is vital. Our team provides accurate cost estimates and diligent budget management throughout the project lifecycle to ensure financial predictability and value.',
    images: [
            { caption: 'Planning', source: require('../../assets/images/expertise/construction_pm_planning.png') },
      { caption: 'Scheduling', source: require('../../assets/images/expertise/construction_pm_scheduling.png') },
    ],
  },
  {
    key: 'quality',
    title: 'Quality Management',
    description: 'We are committed to the highest standards of quality. Our quality management systems ensure that all project deliverables meet or exceed client expectations and regulatory requirements.',
    images: [
            { caption: 'Planning', source: require('../../assets/images/expertise/construction_pm_planning.png') },
      { caption: 'Scheduling', source: require('../../assets/images/expertise/construction_pm_scheduling.png') },
    ],
  },
];

const ConstructionProjectManagementScreen: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState(TABS_DATA[0].key);

  const activeTabData = TABS_DATA.find(tab => tab.key === activeTabKey);

  const Tab = ({ title, tabKey }: { title: string; tabKey: string }) => {
    const isActive = activeTabKey === tabKey;
    return (
      <TouchableOpacity
        style={[styles.tab, isActive && styles.tabActive]}
        onPress={() => setActiveTabKey(tabKey)}
      >
        {isActive && <Text style={styles.tabArrow}>&lt;</Text>}
        <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      pagingEnabled={true}
    >
      <View style={styles.pageContainer}>
        <ImageBackground
          source={require('../../assets/images/expertise/construction_hero.jpg')}
          style={styles.hero}
        >
          <Text style={styles.heroText}>Construction</Text>
        </ImageBackground>

        <View style={styles.mainContent}>
          <View style={styles.breadcrumbContainer}>
            <Text style={styles.breadcrumbText}>Home &gt; Expertise &gt; Construction &gt; </Text>
            <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>Project Management</Text>
          </View>
          <Text style={styles.title}>Project Management</Text>
          <Text style={styles.description}>
            Our expert project management team ensures seamless execution of engineering and infrastructure projects across Ontario. With over 150 skilled professionals, we deliver projects on time, within budget, and to the highest standards. From planning to completion, our proven methodology drives efficiency, innovation, and client satisfaction every step of the way.
          </Text>
        </View>
      </View>

      <View style={styles.pageContainer}>
        <View style={styles.pageContentWrapper}>
          <View style={styles.tabsSection}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
              {TABS_DATA.map(tab => (
                <Tab key={tab.key} title={tab.title} tabKey={tab.key} />
              ))}
            </ScrollView>
          </View>

          <ScrollView
            style={styles.tabContentScrollView}
            contentContainerStyle={styles.tabContentContainer}
            showsVerticalScrollIndicator={false}
          >
            {activeTabData && (
              <>
                <Text style={styles.tabContentTitle}>{activeTabData.title}</Text>
                <Text style={styles.tabContentDescription}>{activeTabData.description}</Text>
                <View style={styles.imagesRow}>
                  {activeTabData.images.map(img => (
                    <View key={img.caption} style={styles.imageCard}>
                      <ImageBackground source={img.source} style={styles.image} imageStyle={{ borderRadius: 12 }}>
                        <LinearGradient
                          colors={['transparent', 'rgba(90, 34, 153, 0.8)']}
                          style={styles.imageGradient}
                        >
                          <Text style={styles.imageCaption}>{img.caption}</Text>
                        </LinearGradient>
                      </ImageBackground>
                    </View>
                  ))}
                </View>
              </>
            )}
          </ScrollView>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: HEADER_HEIGHT,
  },
  pageContainer: {
    width: width,
    height: screenHeight - HEADER_HEIGHT,
  },
  pageContentWrapper: {
    flex: 1,
  },
  hero: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  mainContent: {
    flex: 1,
    padding: 25,
    transform: [{ translateY: -80 }],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
  },
  breadcrumbText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  breadcrumbActive: {
    color: '#1C1C1E',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  tabsSection: {
    backgroundColor: '#111111',
    paddingVertical: 15,
  },
  tabsContainer: {
    paddingHorizontal: 25,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
  },
  tabArrow: {
    color: '#111111',
    marginRight: 8,
    fontSize: 12,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  tabTextActive: {
    color: '#111111',
  },
  tabContentScrollView: {
    backgroundColor: '#F5F5F7',
  },
  tabContentContainer: {
    padding: 25,
    // paddingTop: 40,
  },
  tabContentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 15,
  },
  tabContentDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    marginBottom: 30,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageCard: {
    width: '48%',
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#6A1B9A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 220,
    justifyContent: 'flex-end',
  },
  imageGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 12,
    padding: 10,
  },
  imageCaption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ConstructionProjectManagementScreen;