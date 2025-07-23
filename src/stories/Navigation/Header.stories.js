import React from 'react';
import Button from '../components/Button';
import { QDSHeader } from './Header';
import {
    headerNavData,
    headerSubNavData,
    userMenuContent,
    userNotifications
} from './Header.data';

export default {
    title: 'Components/Navigation/Page header',
    component: QDSHeader,
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

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<header class="ds-header">
    <div class="ds-grid --margins --max-width">
        <a class="ds-brand-wrapper --md" href="/">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="logo">
        </a>
    </div>
</header>
                `.trim()
            }
        }
    }
};

export const HeaderWithButton = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md',
        button: (
            <Button
                label="Sign on"
                icon="plus-circle"
                iconRight="caret-right"
                onClick={() => {}}
                size="sm"
            />
        )
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<header class="ds-header">
    <div class="ds-grid --margins --max-width">
        <a class="ds-brand-wrapper --md" href="/">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="logo">
        </a>
        
        <nav class="ds-header__nav">
            <button class="ds-button --primary --sm" aria-label="Sign on">
                <span class="ds-icon--plus-circle --left" aria-label="plus-circle" role="img"></span>
                <span>Sign on</span>
                <span class="ds-icon--caret-right --right" aria-label="caret-right" role="img"></span>
            </button>
        </nav>
    </div>
</header>
                `.trim()
            }
        }
    }
};
