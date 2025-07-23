import { QDSCard } from './Card';

export default {
    title: 'Components/Card',
    component: QDSCard,
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

export const BasicCard = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis.'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-card">
    <div class="ds-card__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const CardWithTitle = {
    args: {
        ...BasicCard.args,
        title: 'Title'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-card">
    <div class="ds-card__content">
        <h3>Title</h3>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis.
    </div>
</div>
                `.trim()
            }
        }
    }
};
