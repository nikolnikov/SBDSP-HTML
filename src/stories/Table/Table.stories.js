import React from 'react';
import { QDSTable } from './Table';
import {
    tableHeadDataOne,
    tableCellDataOne,
    tableCellDataTwo,
    tableHeadDataTwo
} from './data';

export default {
    title: 'Components/Table',
    component: QDSTable,
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

const Template = args => {
    const tableCellData = args.isExpandable
        ? tableCellDataTwo
        : tableCellDataOne;
    const tableHeadData = args.isExpandable
        ? tableHeadDataTwo
        : tableHeadDataOne;

    return (
        <QDSTable
            {...args}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
        />
    );
};

export const BasicTable = Template.bind({});
BasicTable.args = {};
BasicTable.argTypes = {
    customClasses: { table: { disable: true } },
    sortOrder: { table: { disable: true } },
    sortProperty: { table: { disable: true } },
    tableCellData: { table: { disable: true } },
    tableHeadData: { table: { disable: true } }
};
BasicTable.parameters = {
    docs: {
        source: {
            language: 'html',
            type: 'code',
            code: `
<table class="ds-table">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th">
                Patient Name
            </th>

            <th class="ds-table__head-th">
                Test ordered
            </th>

            <th class="ds-table__head-th">
                Lab Ref Id
            </th>

            <th class="ds-table__head-th">
                Ordered by
            </th>

            <th class="ds-table__head-th">
                Status
            </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>
        </tr>

        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Jupiter, Sally</span>
            </td>

            <td class="ds-table__row-td">
                <span>CBC (includes Differential and Platelets) with Automated Differential</span>
            </td>

            <td class="ds-table__row-td">
                <span>5678</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Received at Quest</span>
            </td>
        </tr>

        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Kovachs, Walter</span>
            </td>

            <td class="ds-table__row-td">
                <span>Lipid Panel</span>
            </td>

            <td class="ds-table__row-td">
                <span>9012</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Resulted</span>
            </td>
        </tr>
    </tbody>
</table>
            `.trim()
        }
    }
};

export const FlatTransparentTable = Template.bind({});
FlatTransparentTable.args = {
    isFlat: true,
    isTransparent: true
};
FlatTransparentTable.argTypes = {
    ...BasicTable
};
FlatTransparentTable.parameters = {
    docs: {
        source: {
            language: 'html',
            type: 'code',
            code: `
<table class="ds-table --flat --transparent">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th">
                Patient Name
            </th>

            <th class="ds-table__head-th">
                Test ordered
            </th>

            <th class="ds-table__head-th">
                Lab Ref Id
            </th>

            <th class="ds-table__head-th">
                Ordered by
            </th>

            <th class="ds-table__head-th">
                Status
            </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>
        </tr>

        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Jupiter, Sally</span>
            </td>

            <td class="ds-table__row-td">
                <span>CBC (includes Differential and Platelets) with Automated Differential</span>
            </td>

            <td class="ds-table__row-td">
                <span>5678</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Received at Quest</span>
            </td>
        </tr>

        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Kovachs, Walter</span>
            </td>

            <td class="ds-table__row-td">
                <span>Lipid Panel</span>
            </td>

            <td class="ds-table__row-td">
                <span>9012</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Resulted</span>
            </td>
        </tr>
    </tbody>
</table>
            `.trim()
        }
    }
};
