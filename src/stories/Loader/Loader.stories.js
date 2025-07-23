import { QDSLoader } from './Loader';

export default {
    title: 'Components/Loader/Spinner',
    component: QDSLoader,
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

export const DefaultLoader = {
    args: {},
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-loading" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
                `.trim()
            }
        }
    }
};

export const SmallLoader = {
    args: {
        isSmall: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-loading --small" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
                `.trim()
            }
        }
    }
};
