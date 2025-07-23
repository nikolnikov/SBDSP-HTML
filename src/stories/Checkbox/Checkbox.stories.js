import { QDSCheckbox } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: QDSCheckbox,
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

export const DefaultCheckbox = {
    args: {
        label: 'Checkbox label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<label class="ds-input__checkbox" for="checkbox">
    <input id="checkbox" type="checkbox">
    <span></span>
    Checkbox label
</label>
                `.trim()
            }
        }
    }
};

export const RequiredCheckbox = {
    args: {
        inputId: 'checkbox-2',
        isRequired: true,
        label: 'Checkbox label',
        name: 'checkbox-2',
        onChange: () => {},
        value: 'checkbox-2'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<label class="ds-input__checkbox --required" for="checkbox">
    <input id="checkbox" type="checkbox">
    <span></span>
    Checkbox label
</label>
                `.trim()
            }
        }
    }
};

export const DisabledCheckbox = {
    args: {
        inputId: 'checkbox-3',
        isDisabled: true,
        label: 'Checkbox label',
        name: 'checkbox-3',
        onChange: () => {},
        value: 'checkbox-3'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<label class="ds-input__checkbox --disabled" for="checkbox">
    <input id="checkbox" type="checkbox">
    <span></span>
    Checkbox label
</label>
                `.trim()
            }
        }
    }
};

export const CheckedCheckbox = {
    args: {
        inputId: 'checkbox-4',
        isChecked: true,
        label: 'Checkbox label',
        name: 'checkbox-4',
        onChange: () => {},
        value: 'checkbox-4'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<label class="ds-input__checkbox" for="checkbox">
    <input id="checkbox" type="checkbox" checked>
    <span></span>
    Checkbox label
</label>
                `.trim()
            }
        }
    }
};

export const IndeterminateCheckbox = {
    args: {
        inputId: 'checkbox-5',
        isIndeterminate: true,
        label: 'Default checkbox',
        name: 'checkbox-5',
        onChange: () => {},
        value: 'checkbox-5'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<label class="ds-input__checkbox --indeterminate" for="checkbox">
    <input id="checkbox" type="checkbox">
    <span></span>
    Checkbox label
</label>
                `.trim()
            }
        }
    }
};
