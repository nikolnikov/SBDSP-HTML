import { QDSAvatar } from './Avatar';

export default {
    title: 'Components/Avatar',
    component: QDSAvatar,
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

export const SolidAvatar = {
    args: {
        initial: 'A',
        size: 'lg'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-avatar --solid --lg">
    A
</div>
                `.trim()
            }
        }
    }
};

export const OutlinedAvatar = {
    args: {
        ...SolidAvatar.args,
        isOutlined: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-avatar --outlined --lg">
    A
</div>
                `.trim()
            }
        }
    }
};
