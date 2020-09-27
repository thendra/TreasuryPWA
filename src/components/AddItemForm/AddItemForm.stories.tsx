import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import AddItemFormComp from './AddItemForm';

export default {
  title: 'AddItemForm',
  component: AddItemFormComp,
  decorators: [withKnobs],
};

export const AddItemForm = () => <AddItemFormComp />;
