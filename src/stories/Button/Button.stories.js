import { QDSButton } from './Button';

export default {
    title: 'Components/Button/Standard',
    component: QDSButton,
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

export const PrimaryButton = {
    args: {
        label: 'Button label',
        size: 'lg',
        type: 'primary'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const DisabledPrimaryButton = {
    args: {
        ...PrimaryButton.args,
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg --disabled">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const PrimaryButtonWithLeftIcon = {
    args: {
        ...PrimaryButton.args,
        icon: 'plus-circle'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg">
    <span class="ds-icon--plus-circle --left" aria-label="plus-circle" role="img"></span>
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const PrimaryButtonWithRightIcon = {
    args: {
        ...PrimaryButton.args,
        iconRight: 'plus-circle'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg">
    <span>Button label</span>
    <span class="ds-icon--plus-circle --right" aria-label="plus-circle" role="img"></span>
</button>
                `.trim()
            }
        }
    }
};

export const PrimaryButtonWithBothIcons = {
    args: {
        ...PrimaryButton.args,
        icon: 'info',
        iconRight: 'caret-right'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg">
    <span class="ds-icon--info --left" aria-label="info" role="img"></span>
    <span>Button label</span>
    <span class="ds-icon--caret-right --right" aria-label="caret-right" role="img"></span>
</button>
                `.trim()
            }
        }
    }
};

export const InversePrimaryButton = {
    args: {
        ...PrimaryButton.args,
        isInverse: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg --inverse">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const SecondaryButton = {
    args: {
        ...PrimaryButton.args,
        type: 'secondary'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --secondary --lg">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const DisabledSecondaryButton = {
    args: {
        ...PrimaryButton.args,
        isDisabled: true,
        type: 'secondary'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --secondary --lg --disabled">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const InverseSecondaryButton = {
    args: {
        ...PrimaryButton.args,
        isInverse: true,
        type: 'secondary'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --secondary --lg --inverse">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const DestructiveButton = {
    args: {
        ...PrimaryButton.args,
        isDestructive: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --primary --lg --destructive">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const GhostButton = {
    args: {
        ...PrimaryButton.args,
        type: 'ghost'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --ghost --lg">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const DisabledGhostButton = {
    args: {
        ...PrimaryButton.args,
        isDisabled: true,
        type: 'ghost'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --ghost --lg --disabled">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};

export const DestructiveGhostButton = {
    args: {
        ...PrimaryButton.args,
        isDestructive: true,
        type: 'ghost'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-button --ghost --lg --destructive">
    <span>Button label</span>
</button>
                `.trim()
            }
        }
    }
};
