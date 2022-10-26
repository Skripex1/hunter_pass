/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ApCard from './app-preview-card';
import { previewCards } from './constants';
import { AppPreviewContainer } from './styles';

const AppPreview = (): JSX.Element => {
  return (
    <AppPreviewContainer>
      {previewCards.map(previewCard => (
        <ApCard key={previewCard.title} {...previewCard} />
      ))}
    </AppPreviewContainer>
  );
};

export default AppPreview;
