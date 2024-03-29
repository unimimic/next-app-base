import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/ui/button';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};
