import { QDSLink } from './Link';

export default {
    title: 'Components/Link',
    component: QDSLink,
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

export const DefaultLink = {
    args: {
        label: 'Link example',
        url: null
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<a class="ds-link">Link example</a>
                `.trim()
            }
        }
    }
};

export const InverseLink = {
    args: {
        ...DefaultLink.args,
        isInverse: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<a class="ds-link --inverse">Link example</a>
                `.trim()
            }
        }
    }
};

export const DestructiveLink = {
    args: {
        ...DefaultLink.args,
        isDestructive: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<a class="ds-link --destructive">Link example</a>
                `.trim()
            }
        }
    }
};

export const LinkWithLeftIcon = {
    args: {
        ...DefaultLink.args,
        iconLeft: 'info'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<a class="ds-link --icons">
    <span class="ds-icon--info" aria-label="info" role="img"></span>
    <span>Link example</span>
</a>
                `.trim()
            }
        }
    }
};

export const LinkWithRightIcon = {
    args: {
        ...DefaultLink.args,
        iconRight: 'info'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<a class="ds-link --icons">
    <span>Link example</span>
    <span class="ds-icon--info" aria-label="info" role="img"></span>
</a>
                `.trim()
            }
        }
    }
};
