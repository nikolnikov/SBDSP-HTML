import { QDSRadioGroup } from './RadioButton';

export default {
    title: 'Components/Radio button',
    component: QDSRadioGroup,
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

const radioOptions = [
    {
        inputId: 'option1',
        value: 'option1',
        label: 'Option 1',
        isDisabled: false
    },
    {
        inputId: 'option2',
        value: 'option2',
        label: 'Option 2',
        isDisabled: false
    },
    {
        inputId: 'option3',
        value: 'option3',
        label: 'Option 3',
        isDisabled: true
    }
];

const radioOptions2 = [
    {
        inputId: 'option4',
        value: 'option4',
        label: 'Option 1',
        isDisabled: false
    },
    {
        inputId: 'option5',
        value: 'option5',
        label: 'Option 2',
        isDisabled: false
    },
    {
        inputId: 'option6',
        value: 'option6',
        label: 'Option 3',
        isDisabled: true
    }
];

export const HorizontalRadioGroup = {
    args: {
        groupLabel: 'Horizontal group',
        groupName: 'radio-group',
        radioOptions: radioOptions,
        onChange: () => {}
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__radio-group">
    <label>
        <span>Horizontal group</span>
    </label>
    
    <div class="ds-input__radio">
        <input id="option1" type="radio" name="radio-group" value="option1" />
        <label for="option1">Option 1</label>
    </div>
    
    <div class="ds-input__radio">
        <input id="option2" type="radio" name="radio-group" value="option2" />
        <label for="option2">Option 2</label>
    </div>
    
    <div class="ds-input__radio --disabled">
        <input disabled="" id="option3" type="radio" name="radio-group" value="option3" />
        <label for="option3">Option 3</label>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const VerticalRadioGroup = {
    args: {
        groupLabel: 'Vertical group',
        groupName: 'radio-group-vertical',
        radioOptions: radioOptions2,
        onChange: () => {},
        isVertical: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input__radio-group --vertical">
    <label>
        <span>Vertical group</span>
    </label>
    
    <div class="ds-input__radio">
        <input id="option1" type="radio" name="radio-group" value="option1" />
        <label for="option1">Option 1</label>
    </div>
    
    <div class="ds-input__radio">
        <input id="option2" type="radio" name="radio-group" value="option2" />
        <label for="option2">Option 2</label>
    </div>
    
    <div class="ds-input__radio --disabled">
        <input disabled="" id="option3" type="radio" name="radio-group" value="option3" />
        <label for="option3">Option 3</label>
    </div>
</div>
                `.trim()
            }
        }
    }
};
