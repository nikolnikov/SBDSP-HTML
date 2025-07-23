import { QDSProgressBar } from './ProgressBar';

export default {
    title: 'Components/Progress indicator/Progress bar',
    component: QDSProgressBar,
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

export const DefaultProgressBar = {
    args: {
        fillPercentage: 50
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-progressbar" role="progressbar">
    <div class="--fill" aria-label="Progress" style="width: 50%;"></div>
</div>
                `.trim()
            }
        }
    }
};
