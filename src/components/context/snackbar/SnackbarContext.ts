import React from 'react';

interface SnackbarContextType {
  openSnackbar: (message: string, type?: string) => void;
  closeSnackbar: () => void;
}

const SnackbarContext = React.createContext<SnackbarContextType>(
  {} as SnackbarContextType
);

export default SnackbarContext;
