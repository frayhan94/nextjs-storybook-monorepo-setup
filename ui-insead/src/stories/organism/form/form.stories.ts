import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './form.tsx';

const meta = {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullWidth: Story = {
  args: {},
};
