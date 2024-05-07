import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import Spinner from './Spinner';
import Sizing from './Sizing';
import WinnerModal from './WinnerModal';

const SpinWheel = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [winnerText, setWinnerText] = useState('');
  const [isWinnerModalVisible, setWinnerModalVisible] = useState(false);
  const spinnerRef = useRef();

  const spin = () => {
    console.log(spinnerRef.current);
    if (spinnerRef.current) {
      spinnerRef.current._onPress();
    }
    setShowConfetti(false);
    setTimeout(() => {
      setShowConfetti(true);
    }, 3500);
  };

  const getWinner = (value, index) => {
    setWinnerText(value);
    setWinnerModalVisible(true);
  };

  const closeModal = () => {
    setWinnerModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={spin}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./img/spinner-static.png')}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: Sizing.deviceHeight * 0.22,
            left: Sizing.deviceWidth * 0.331,
            zIndex: 1,
            width: Sizing.deviceWidth * 0.11,
            height: Sizing.deviceWidth * 0.12,
          }}>
          {true ? (
            <Spinner
              options={{
                knobSize: 50,
                duration: 4000,
                backgroundColor: 'transparent',
                knobSource: require('./img/spinner-pointer.png'),
                getWinner: getWinner,
                onRef: ref => (spinnerRef.current = ref),
                rewards: [
                  'jonathan',
                  'joseph',
                  'jotaro',
                  'josuke',
                  'giorno',
                  'jolyne',
                ],
                colors: [
                  '#E07026',
                  '#E8C22E',
                  '#ABC937',
                  '#4F991D',
                  '#22AFD3',
                  '#5858D0',
                  '#7B48C8',
                  '#D843B9',
                  '#E23B80',
                  '#D82B2B',
                ],
              }}
            />
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>

      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{x: 0, y: 0}}
          explosionSpeed={400}
          fadeOut
        />
      )}

      {
        <WinnerModal
          isVisible={isWinnerModalVisible}
          winner={winnerText}
          onClose={closeModal}
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080aa',
    height: Sizing.deviceHeight,
  },
  imageContainer: {
    width: Sizing.deviceWidth * 0.767,
    height: Sizing.deviceWidth * 0.762,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  imageStyle: {
    marginTop: Sizing.deviceHeight * 0.146,
    width: Sizing.deviceWidth * 0.9,
    height: Sizing.deviceHeight * 0.62,
    resizeMode: 'cover',
  },
});

export default SpinWheel;
