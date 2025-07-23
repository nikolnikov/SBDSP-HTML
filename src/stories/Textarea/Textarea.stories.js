import { QDSTextarea } from './Textarea';

export default {
    title: 'Components/Inputs/Text area',
    component: QDSTextarea,
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

export const BasicTextArea = {
    args: {
        inputId: 'textarea-1',
        label: 'Textarea label',
        onChange: () => {}
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --textarea">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    
    <textarea class="ds-textarea" id="textarea"></textarea>
</div>
                `.trim()
            }
        }
    }
};

export const RequiredTextArea = {
    args: {
        ...BasicTextArea.args,
        inputId: 'textarea-2',
        isRequired: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --textarea --required">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    
    <textarea class="ds-textarea" id="textarea"></textarea>
</div>
                `.trim()
            }
        }
    }
};

export const DisabledTextArea = {
    args: {
        ...BasicTextArea.args,
        inputId: 'textarea-3',
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --textarea --disabled">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    
    <textarea class="ds-textarea" id="textarea" disabled></textarea>
</div>
                `.trim()
            }
        }
    }
};

export const TextAreaWithError = {
    args: {
        ...BasicTextArea.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'textarea-4'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --textarea --error">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    
    <textarea class="ds-textarea" id="textarea"></textarea>

    <div class="ds-input__error">
        Error message goes here.
    </span>
</div>
                `.trim()
            }
        }
    }
};

export const TextAreaWithHintText = {
    args: {
        ...BasicTextArea.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'textarea-5'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --textarea">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    
    <textarea class="ds-textarea" id="textarea"></textarea>

    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};
