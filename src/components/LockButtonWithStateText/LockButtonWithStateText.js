import React, {useState} from 'react';
import {
    ComponentWrapper, 
    LockUnlockButton,
    LockStateText,
} from './styled';
import {Text, Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

export const LockButtonWithStateText = () => {
  const [isDoorLocked, setIsDoorLocked] = useState(true);

  const handleUnlockPress = async () => {
    console.log('handleUnlockPress');
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      // Check if biometrics are available
      const {available, biometryType} = await rnBiometrics.isSensorAvailable();

      if (available) {
        // Display prompt for user biometric verification
        const {success} = await rnBiometrics.simplePrompt({
          promptMessage: 'Confirm your identity to proceed',
        });
        if (success) {
          // If biometrics are successfully verified, change the state
          setIsDoorLocked(prevState => !prevState);
          Alert.alert('Success', 'Door Unlocked');
        } else {
          Alert.alert('Error', 'Authentication Failed!');
        }
      } else {
        Alert.alert(
          'Error',
          `Biometric authentication not available: ${biometryType}`,
        );
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during biometric authentication');
    }
  };

  const handleLockPress = () => {
    console.log('handleLockPress');
    setIsDoorLocked(true);
  };

  return (
    <ComponentWrapper>
      <LockUnlockButton
        onPress={isDoorLocked ? handleUnlockPress : handleLockPress}>
        <Text>{isDoorLocked ? 'Unlock' : 'Lock'}</Text>
      </LockUnlockButton>
      <LockStateText>Door is currently {isDoorLocked ? 'locked' : 'unlocked'}</LockStateText>
    </ComponentWrapper>
  );
};
