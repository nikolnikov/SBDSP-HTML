import { QDSInput } from './Input';

export default {
    title: 'Components/Inputs/Text Input',
    component: QDSInput,
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

export const BasicTextInput = {
    args: {
        inputId: 'input-1',
        label: 'Input label',
        type: 'text'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <input id="input" type="text" value="" />
</div>
                `.trim()
            }
        }
    }
};

export const RequiredTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-2',
        isRequired: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --required">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <input id="input" type="text" value="" />
</div>
                `.trim()
            }
        }
    }
};

export const DisabledTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-3',
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --disabled">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <input id="input" type="text" value="" disabled />
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithLeftIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-4',
        iconLeft: 'search'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="search" role="img"></span>
        <input id="input" type="text" value="" />
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithRightIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-5',
        iconRight: 'location'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <input id="input" type="text" value="" />
        <span class="ds-icon--location --right" aria-label="location" role="img"></span>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithBothIcons = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-6',
        iconLeft: 'search',
        iconRight: 'location'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="search" role="img"></span>
        <input id="input" type="text" value="" />
        <span class="ds-icon--location --right" aria-label="location" role="img"></span>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithError = {
    args: {
        ...BasicTextInput.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --error">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <input id="input" type="text" value="" />

    <div class="ds-input__error" role="alert">
        Error message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithHintText = {
    args: {
        ...BasicTextInput.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <input id="input" type="text" value="" />

    <div class="ds-input__hint" role="tooltip">
        Hint message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithTooltip = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-10',
        tooltip: 'Tooltip message goes here.'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>

        <button class="ds-button --icon ds-tooltip --sm" aria-label="info">
            <span class="ds-icon--info" aria-label="info" role="img"></span>
            <span class="ds-tooltip__text">Tooltip message goes here.</span>
        </button>
    </label>
    
    <input id="input" type="text" value="" />
</div>
                `.trim()
            }
        }
    }
};
