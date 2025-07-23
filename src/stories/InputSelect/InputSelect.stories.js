import { QDSInputSelect } from './InputSelect';

export default {
    title: 'Components/Inputs/Single select',
    component: QDSInputSelect,
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

export const BasicSelect = {
    args: {
        inputId: 'input-1',
        label: 'Input label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select id="input">
        <option value="">Select an option</option>
        <option value="">Last 1 day</option>
        <option value="">Last 2 days</option>
        <option value="">Last 3 days</option>
        <option value="">Last 4 days</option>
        <option value="">Last 5 days</option>
    </select>
</div>
                `.trim()
            }
        }
    }
};

export const RequiredSelect = {
    args: {
        ...BasicSelect.args,
        inputId: 'input-2',
        isRequired: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__select --required">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select id="input">
        <option value="">Select an option</option>
        <option value="">Last 1 day</option>
        <option value="">Last 2 days</option>
        <option value="">Last 3 days</option>
        <option value="">Last 4 days</option>
        <option value="">Last 5 days</option>
    </select>
</div>
                `.trim()
            }
        }
    }
};

export const DisabledSelect = {
    args: {
        ...BasicSelect.args,
        inputId: 'input-3',
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__select --disabled">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select id="input" disabled>
        <option value="">Select an option</option>
        <option value="">Last 1 day</option>
        <option value="">Last 2 days</option>
        <option value="">Last 3 days</option>
        <option value="">Last 4 days</option>
        <option value="">Last 5 days</option>
    </select>
</div>
                `.trim()
            }
        }
    }
};

export const SelectWithError = {
    args: {
        ...BasicSelect.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-4'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__select --error">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select id="input">
        <option value="">Select an option</option>
        <option value="">Last 1 day</option>
        <option value="">Last 2 days</option>
        <option value="">Last 3 days</option>
        <option value="">Last 4 days</option>
        <option value="">Last 5 days</option>
    </select>

    <div class="ds-input__error" role="alert">
        Error message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const SelectWithHintText = {
    args: {
        ...BasicSelect.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-5'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select id="input">
        <option value="">Select an option</option>
        <option value="">Last 1 day</option>
        <option value="">Last 2 days</option>
        <option value="">Last 3 days</option>
        <option value="">Last 4 days</option>
        <option value="">Last 5 days</option>
    </select>

    <div class="ds-input__hint" role="tooltip">
        Hint message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const SelectWithTooltip = {
    args: {
        ...BasicSelect.args,
        inputId: 'input-6',
        tooltip: 'Tooltip message goes here.'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input">
        <span>Input label</span>

        <button class="ds-button --icon ds-tooltip --sm" aria-label="info">
            <span class="ds-icon--info" aria-label="info" role="img"></span>
            <span class="ds-tooltip__text">Tooltip message goes here.</span>
        </button>
    </label>

    <select id="input">
        <option value="">Select an option</option>
        <option value="">Last 1 day</option>
        <option value="">Last 2 days</option>
        <option value="">Last 3 days</option>
        <option value="">Last 4 days</option>
        <option value="">Last 5 days</option>
    </select>
</div>
                `.trim()
            }
        }
    }
};
