import { QDSBadge } from './Badge';

export default {
    title: 'Components/Badge',
    component: QDSBadge,
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

export const SolidBadge = {
    args: {
        label: 'Status',
        status: 'neutral'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --neutral" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SolidCircleBadge = {
    args: {
        isCircle: true,
        label: '#',
        status: 'informative'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --circle --informative" role="status">
    #
</div>
                `.trim()
            }
        }
    }
};

export const SecondaryBadge = {
    args: {
        label: 'Status',
        secondary: true,
        status: 'success'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --secondary --success" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SecondaryCircleBadge = {
    args: {
        isCircle: true,
        label: '#',
        secondary: true,
        status: 'warning'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --circle --secondary --warning" role="status">
    #
</div>
                `.trim()
            }
        }
    }
};

export const NotificationBadge = {
    args: {
        hasNotification: true,
        status: 'error'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --dot --error" role="status"></div>
                `.trim()
            }
        }
    }
};
