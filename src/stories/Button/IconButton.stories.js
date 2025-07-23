import { QDSIconButton } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: QDSIconButton,
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

export const PrimaryIconButton = {
    args: {
        icon: 'gear',
        size: 'lg'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --icon --lg" aria-label="gear">
    <span class="ds-icon--gear" aria-label="gear" role="img"></span>
</button>
                `.trim()
            }
        }
    }
};

export const DisabledPrimaryIconButton = {
    args: {
        ...PrimaryIconButton.args,
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --icon --lg --disabled" aria-label="gear">
    <span class="ds-icon--gear" aria-label="gear" role="img"></span>
</button>
                `.trim()
            }
        }
    }
};

export const DestructivePrimaryIconButton = {
    args: {
        ...PrimaryIconButton.args,
        isDestructive: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --icon --lg --destructive" aria-label="gear">
    <span class="ds-icon--gear" aria-label="gear" role="img"></span>
</button>
                `.trim()
            }
        }
    }
};

export const InverseIconButton = {
    args: {
        ...PrimaryIconButton.args,
        isInverse: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --icon --lg --inverse" aria-label="gear">
    <span class="ds-icon--gear" aria-label="gear" role="img"></span>
</button>
                `.trim()
            }
        }
    }
};

export const IconButtonWithTooltip = {
    args: {
        ...PrimaryIconButton.args,
        tooltip: 'Tooltip goes here.'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --icon --lg ds-tooltip" aria-label="gear">
    <span class="ds-icon--gear" aria-label="gear" role="img"></span>
    <span class="ds-tooltip__text">Tooltip goes here.</span>
</button>
                `.trim()
            }
        }
    }
};
