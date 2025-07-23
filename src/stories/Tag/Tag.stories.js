import { QDSTag } from './Tag';

export default {
    title: 'Components/Tag',
    component: QDSTag,
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

export const PrimaryTag = {
    args: {
        label: 'Label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-tag">
    Label
</button>
                `.trim()
            }
        }
    }
};

export const DisabledPrimaryTag = {
    args: {
        ...PrimaryTag.args,
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-tag --disabled">
    Label
</button>
                `.trim()
            }
        }
    }
};

export const SecondaryTag = {
    args: {
        ...PrimaryTag.args,
        isSecondary: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-tag --secondary">
    Label
</button>
                `.trim()
            }
        }
    }
};
