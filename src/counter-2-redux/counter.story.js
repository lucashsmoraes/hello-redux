import { Counter } from './index'
import React from 'react'
import { action } from '@storybook/addon-actions';
import { storiesOf} from '@storybook/react';

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
    <Counter counter={1} decrement={action('decrement')} increment={action('increment')}/>
))