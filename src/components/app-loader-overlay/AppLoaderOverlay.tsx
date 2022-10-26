import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import LoaderProps from './types';

const AppLoaderOverlay = (props: LoaderProps): JSX.Element => {
  const { isLoading } = props;
  if (!isLoading) {
    return null;
  }
  return (
    <Backdrop sx={{ display: 'block', color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open>
      <CircularProgress sx={{ position: 'sticky', top: '49%', left: ' calc((100vw - 40px)/2)' }} color="inherit" />
    </Backdrop>
  );
};

export default AppLoaderOverlay;
