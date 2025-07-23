import { QDSToggle } from './Toggle';

export default {
    title: 'Components/Toggle',
    component: QDSToggle,
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

export const BasicToggle = {
    args: {
        inputId: 'toggle-1',
        label: 'Label',
        labelPosition: 'after'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-toggle-switch">
    <label class="ds-toggle-switch__container" for="toggle-1">
        <input type="checkbox" id="toggle-1" />
        <div class="ds-toggle-switch__slider"></div>
    </label>
    
    <div class="ds-toggle-switch__label">
        Label
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const DisabledToggle = {
    args: {
        ...BasicToggle.args,
        inputId: 'toggle-2',
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-toggle-switch --disabled">
    <label class="ds-toggle-switch__container" for="toggle-1">
        <input type="checkbox" id="toggle-1" disabled />
        <div class="ds-toggle-switch__slider"></div>
    </label>
    
    <div class="ds-toggle-switch__label">
        Label
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const CheckedToggle = {
    args: {
        ...BasicToggle.args,
        inputId: 'toggle-3',
        isChecked: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-toggle-switch">
    <label class="ds-toggle-switch__container" for="toggle-1">
        <input type="checkbox" id="toggle-1" checked />
        <div class="ds-toggle-switch__slider"></div>
    </label>
    
    <div class="ds-toggle-switch__label">
        Label
    </div>
</div>
                `.trim()
            }
        }
    }
};
