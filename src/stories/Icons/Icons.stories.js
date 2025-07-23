import React from 'react';
import { QDSIcon } from './Icons';

export default {
    title: 'Components/Icons',
    component: QDSIcon,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        controls: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },

    tags: ['autodocs', '!dev']
};

const Template = args => <QDSIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'gray__900',
    name: 'info',
    size: '24'
};
Default.parameters = {
    docs: {
        source: {
            language: 'html',
            type: 'code',
            code: `
<span class="ds-icon--info ds-font-24 ds-gray__900" aria-label="info" role="img"></span>
            `.trim()
        }
    }
};
