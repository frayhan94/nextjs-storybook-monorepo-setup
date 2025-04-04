import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './navigation.tsx';

const meta = {
  title: 'Example/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {},
  args: { item: [] },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const NavigationItem = [
  {
    label: 'Menu 1',
    url: 'http://google.com',
    icon: null,
    children: [
      {
        label: 'Menu 1 children A',
        url: 'http://google.com',
      },
      {
        label: 'Menu 1 children B',
        url: 'http://google.com',
      },
    ],
  },
  {
    label: 'Menu 2',
    url: 'http://google.com',
    icon: null,
    children: [
      {
        label: 'Menu 2 children A',
        url: 'http://google.com',
      },
      {
        label: 'Menu 2 children B',
        url: 'http://google.com',
      },
    ],
  },
];

const NavigationItemWithoutChildren = NavigationItem.map((item) => {
  return {
    ...item,
    children: null,
  };
});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullWidth: Story = {
  args: {
    width: 'Full',
    activeLabel: 'Menu 2',
    item: NavigationItem,
  },
};

export const HalfWidth: Story = {
  args: {
    width: 'Half',
    activeLabel: 'Menu 2',
    item: NavigationItem,
  },
};

export const NoChildren: Story = {
  args: {
    width: 'Half',
    activeLabel: 'Menu 2',
    item: NavigationItemWithoutChildren,
  },
};

export const NoActiveLabel: Story = {
  args: {
    width: 'Full',
    activeLabel: '',
    item: NavigationItemWithoutChildren,
  },
};
