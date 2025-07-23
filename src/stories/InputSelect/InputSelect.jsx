import React, { useState } from 'react';
import DSInputSelect from '../components/InputSelect';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSInputSelect = ({
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    menuClass,
    isRequired = false,
    label,
    onChange,
    options,
    placeholder,
    selectedValue,
    tooltip
}) => {
    return (
        <div
            className={classNames('ds-input__select', customClasses, {
                '--disabled': isDisabled,
                '--required': isRequired,
                '--error': hasError
            })}
        >
            <label className="ds-input__label" htmlFor={inputId}>
                <span>Input label</span>
                {tooltip && (
                    <button className="ds-button --icon ds-tooltip --sm" aria-label="info">
                        <span className="ds-icon--info" aria-label="info" role="img"></span>
                        <span className="ds-tooltip__text">{tooltip}</span>
                    </button>
                )}
            </label>

            <select id="input">
                <option value="">Select an option</option>
                <option value="">Last 1 day</option>
                <option value="">Last 2 days</option>
                <option value="">Last 3 days</option>
                <option value="">Last 4 days</option>
                <option value="">Last 5 days</option>
            </select>

            {errorMessage && (
                <div className="ds-input__error" role="alert">
                    {errorMessage}
                </div>
            )}
            {hintMessage && !errorMessage && (
                <div className="ds-input__hint" role="tooltip">
                    {hintMessage}
                </div>
            )}
        </div>
    );
};

QDSInputSelect.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    menuClass: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    selectedValue: PropTypes.string,
    tooltip: PropTypes.string
};