
export interface errorCodeToMessages {
    [ key: string ]: string;
};

export const errorCodeToMessages : errorCodeToMessages = {
    'Firebase: Error (auth/email-already-in-use).': 'Email is already in use.',
    'Firebase: Error (auth/invalid-email).': 'Invalid email.',
    'Firebase: Error (auth/user-not-found).': 'User not found.',
    'Firebase: Error (auth/wrong-password).': 'Wrong password.',
    'Firebase: Error (auth/user-disabled).': 'User is disabled.',
    'Firebase: Error (auth/user-token-expired).': 'User token expired.',
    'Firebase: Error (auth/user-mismatch).': 'User mismatch.',
};
