
import { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
// import page3_img_1 from '../../assets/images/page3/page3_bg.png';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.65;
const CARD_HEIGHT = screenHeight * 0.55;
const SIDE_CARD_SCALE = 0.85;
const CARD_SPACING = -screenWidth * 0.15; // Negative spacing for overlap

const projectsData = [
  // {
  //   id: 1,
  //   title: "Conservation Halton - Kelso Conservation Area",
  //   image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  // },
  // {
  //   id: 2,
  //   title: "Highway 66 Resurfacing and Pedestrian cross-over Project - Kirkland Lake",
  //   image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  // },
  // {
  //   id: 3,
  //   title: "Urban Development Project - Downtown Core",
  //   image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  // },
  // {
  //   id: 4,
  //   title: "Sustainable Bridge Infrastructure",
  //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  // },
  // {
  //   id: 5,
  //   title: "Green Energy Wind Farm",
  //   image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  // },
  // {
  //   id: 6,
  //   title: "Smart City Infrastructure",
  //   image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  // },
  // {
  //   id: 7,
  //   title: "Waterfront Redevelopment",
  //   image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  // }
];

const Page3 = ({ style }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (CARD_WIDTH + CARD_SPACING));
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : projectsData.length - 1;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: newIndex * (CARD_WIDTH + CARD_SPACING),
        animated: true
      });
    }
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex < projectsData.length - 1 ? activeIndex + 1 : 0;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: newIndex * (CARD_WIDTH + CARD_SPACING),
        animated: true
      });
    }
    setActiveIndex(newIndex);
  };

  const renderCard = (project, index) => {
    const inputRange = [
      (index - 1) * (CARD_WIDTH + CARD_SPACING),
      index * (CARD_WIDTH + CARD_SPACING),
      (index + 1) * (CARD_WIDTH + CARD_SPACING),
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [SIDE_CARD_SCALE, 1, SIDE_CARD_SCALE],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [20, 0, 20],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={project.id}
        style={[
          styles.card,
          {
            transform: [{ scale }, { translateY }],
            opacity,
            zIndex: index === activeIndex ? 10 : index === activeIndex - 1 || index === activeIndex + 1 ? 5 : 1,
          }
        ]}
      >
        <ImageBackground
          source={{ uri: project.image }}
          style={styles.cardImage}
          imageStyle={styles.cardImageStyle}
        >
          <View style={styles.cardContent}>
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>{project.title}</Text>
              <TouchableOpacity style={styles.exploreButton}>
                <Text style={styles.exploreButtonText}>EXPLORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    );
  };

  return (
    <ImageBackground
      source={""}
      style={[styles.container, style]}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        {/* Header Text */}
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Smart Sustainable Design Solutions</Text>
          <Text style={styles.subtitle}>Your Vision, Our Purpose</Text>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
        </View>

        {/* Carousel Container */}
        <View style={styles.carouselWrapper}>
          {/* Left Arrow */}
          {/* <TouchableOpacity 
            style={[styles.arrow, styles.leftArrow]} 
            onPress={goToPrevious}
            activeOpacity={0.7}
          >
            <Text style={styles.arrowText}>‹</Text>
          </TouchableOpacity> */}

          {/* Cards ScrollView */}
          <View style={styles.carouselContainer}>
            <Animated.ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              onMomentumScrollEnd={handleMomentumScrollEnd}
              scrollEventThrottle={16}
              contentContainerStyle={styles.scrollContent}
              snapToInterval={CARD_WIDTH + CARD_SPACING}
              snapToAlignment="center"
              decelerationRate="fast"
              contentInset={{
                left: (screenWidth - CARD_WIDTH) /2,
                right: (screenWidth - CARD_WIDTH) / 2,
              }}
              contentOffset={{
                x: -(screenWidth - CARD_WIDTH)/2,
                y: 0,
              }}
            >
              {projectsData.map((project, index) => renderCard(project, index))}
            </Animated.ScrollView>
          </View>

          {/* Right Arrow */}
          {/* <TouchableOpacity 
            style={[styles.arrow, styles.rightArrow]} 
            onPress={goToNext}
            activeOpacity={0.7}
          >
            <Text style={styles.arrowText}>›</Text>
          </TouchableOpacity> */}
        </View>

        {/* Pagination Dots */}
        {/* <View style={styles.pagination}>
          {projectsData.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive
              ]}
              onPress={() => {
                if (scrollViewRef.current) {
                  scrollViewRef.current.scrollTo({
                    x: index * (CARD_WIDTH + CARD_SPACING),
                    animated: true
                  });
                }
                setActiveIndex(index);
              }}
            />
          ))}
        </View> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 60, 80, 0.46)',
  },
  headerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  mainTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    opacity: 0.9,
    fontWeight: '300',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
    fontWeight: '400',
    letterSpacing: 1,
  },
  carouselWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  carouselContainer: {
    flex: 1,
    height: CARD_HEIGHT,
    overflow: 'visible',
  },
  arrow: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    marginHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  leftArrow: {
    marginLeft: 20,
  },
  rightArrow: {
    marginRight: 20,
  },
  arrowText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '300',
    marginTop: -4,
  },
  scrollContent: {
    paddingHorizontal: (screenWidth - CARD_WIDTH) / 2 + Math.abs(CARD_SPACING),
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: CARD_SPACING / 2,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000000ff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cardImageStyle: {
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.73)',
    padding: 25,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backdropFilter: 'blur(10px)',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  exploreButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'flex-start',
    elevation: 3,
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  paginationDotActive: {
    backgroundColor: '#ffffff',
    width: 24,
    height: 8,
  },
});

export default Page3;















































