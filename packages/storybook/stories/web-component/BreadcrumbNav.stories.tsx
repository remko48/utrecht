/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const Breadcrumb = ({ children, items, variant }) => {
  return (
    <utrecht-breadcrumb json={JSON.stringify(items)} variant={variant}>
      {children}
    </utrecht-breadcrumb>
  );
};

const meta = {
  title: 'Web Component/Breadcrumb navigation',
  id: 'web-component-breadcrumb-nav',
  component: Breadcrumb,
  argTypes: {
    items: {
      description: 'Menu items',
      type: {
        name: 'array',
        required: true,
      },
    },
    variant: {
      description: 'Variant',
      type: {
        name: 'enum',
      },
      options: ['', 'arrows'],
    },
  },
  args: {
    items: [],
    variant: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-breadcrumb',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { href: 'https://example.com/', title: 'Home' },
      { href: 'https://example.com/a/', title: 'Wonen en leven' },
      { href: 'https://example.com/a/b/', title: 'Afval' },
      { href: 'https://example.com/a/b/c/', title: "Kliko's", current: true },
    ],
    variant: 'arrows',
  },
};

export const DesignTokens = designTokenStory(meta);
