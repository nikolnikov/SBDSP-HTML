import { QDSMessage } from './Message';

export default {
    title: 'Components/Message',
    component: QDSMessage,
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

export const InformativeMessage = {
    args: {
        actions: [
            { title: 'Yes', action: null },
            { title: 'No', action: null }
        ],
        closeHandler: () => {
            console.log('Message closed');
        },
        hideX: false,
        message:
            "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
        noIcon: false,
        title: 'Heading',
        type: 'informative'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --informative" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--info" aria-label="info" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        <h3>Heading</h3>
        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.
        
        <div class="ds-message__actions">
            <a class="ds-link">Yes</a>
            <a class="ds-link">No</a>
        </div>
    </div>
    
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close" role="img"></span>
        </button>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const SuccessMessage = {
    args: {
        ...InformativeMessage.args,
        type: 'success'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --success" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--check-circle" aria-label="check-circle" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        <h3>Heading</h3>
        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.
        
        <div class="ds-message__actions">
            <a class="ds-link">Yes</a>
            <a class="ds-link">No</a>
        </div>
    </div>
    
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close" role="img"></span>
        </button>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const ErrorMessage = {
    args: {
        ...InformativeMessage.args,
        type: 'error'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --error" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning-octagon" aria-label="warning-octagon" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        <h3>Heading</h3>
        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.
        
        <div class="ds-message__actions">
            <a class="ds-link">Yes</a>
            <a class="ds-link">No</a>
        </div>
    </div>
    
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close" role="img"></span>
        </button>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const WarningMessage = {
    args: {
        ...InformativeMessage.args,
        type: 'warning'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --warning" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning" aria-label="warning" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        <h3>Heading</h3>
        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.
        
        <div class="ds-message__actions">
            <a class="ds-link">Yes</a>
            <a class="ds-link">No</a>
        </div>
    </div>
    
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close" role="img"></span>
        </button>
    </div>
</div>
                `.trim()
            }
        }
    }
};
