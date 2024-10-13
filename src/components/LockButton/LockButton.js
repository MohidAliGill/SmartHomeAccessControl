import React, { useState } from "react";
import { LockSwitch } from "./styled";

export const LockButton = () => {
    const [lockState, setLockState] = useState('locked');

    const toggleLockState = () => setLockState(lockState === 'locked' ? 'unlocked' : 'locked');

    return (
        <LockSwitch onPress={toggleLockState} title={lockState} />
    );
};
