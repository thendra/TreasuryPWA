import React from 'react';
import { Story, Meta } from '@storybook/react';

import AddItemForm from './AddItemForm';

export default {
  title: 'AddItemForm',
  component: AddItemForm,
} as Meta;

const Template: Story<typeof AddItemForm> = ({...args}) => <AddItemForm onClose={() => {}} open {...args} />;

export const Primary = Template.bind({});
