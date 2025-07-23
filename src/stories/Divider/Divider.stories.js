import { QDSDivider } from './Divider';

export default {
    title: 'Components/Divider',
    component: QDSDivider,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const DefaultDivider = {
    args: {
        color: 'green__800'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<hr class="ds-divider ds-green__800--bg" />
                `.trim()
            }
        }
    }
};
