/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { FormFieldDescription } from '../../form-field-description/css/story-template';
import { FormFieldset, FormFieldsetLegend } from '../../form-fieldset/css/story-template';
import { FormLabel } from '../../form-label/css/story-template';
import { Heading1 } from '../../heading-1/css/story-template';
import { Heading2 } from '../../heading-2/css/story-template';
import { Heading3 } from '../../heading-3/css/story-template';
import { Heading4 } from '../../heading-4/css/story-template';
import { Heading5 } from '../../heading-5/css/story-template';
import { Heading6 } from '../../heading-6/css/story-template';
import { RadioButton } from '../../radio-button/css/story-template';
import { Textarea } from '../../textarea/css/story-template';
import { Textbox } from '../../textbox/css/story-template';

export const argTypes = {
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
  label: {
    description: 'Set the content of the label',
    control: 'text',
  },
  headingLevel: {
    description: 'Heading level',
    control: { type: 'select' },
    options: ['', '1', '2', '3', '4', '5', '6'],
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['', 'checkbox', 'radio', 'text'],
  },
};

export const defaultArgs = {
  invalid: false,
  label: '',
  headingLevel: '',
  type: '',
  checked: false,
  disabled: false,
  id: '',
  indeterminate: false,
  name: '',
  required: false,
  value: '',
};

export const exampleArgs = {
  name: 'subject',
  label: 'Onderwerp',
};

export const Checkbox = ({
  checked = defaultArgs.checked,
  className,
  custom = false,
  disabled = defaultArgs.disabled,
  id = defaultArgs.id,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  name = defaultArgs.name,
  required = defaultArgs.required,
  value = defaultArgs.value,
  ...restProps
}) => (
  <input
    aria-invalid={invalid || undefined}
    className={clsx(
      'utrecht-checkbox',
      'utrecht-checkbox--html-input',
      custom && 'utrecht-checkbox--custom',
      checked && 'utrecht-checkbox--checked',
      disabled && 'utrecht-checkbox--disabled',
      className,
    )}
    defaultChecked={checked}
    disabled={disabled}
    id={id || undefined}
    indeterminate={!!indeterminate}
    name={name || undefined}
    required={!!required}
    type="checkbox"
    value={value || undefined}
    {...restProps}
  />
);

export const Heading = ({ children, level }) => {
  const HeadingComponent =
    level === 1
      ? Heading1
      : level === 2
      ? Heading2
      : level === 3
      ? Heading3
      : level === 4
      ? Heading4
      : level === 5
      ? Heading5
      : level === 6
      ? Heading6
      : Heading1;

  return <HeadingComponent>{children}</HeadingComponent>;
};

export const FormField = ({ children, id, invalid, type }) => (
  <div
    id={id}
    className={clsx('utrecht-form-field', {
      'utrecht-form-field--invalid': invalid,
      'utrecht-form-field--checkbox': type === 'checkbox',
      'utrecht-form-field--radio': type === 'radio',
      'utrecht-form-field--text': !type || type === 'text',
    })}
  >
    {children}
  </div>
);

export const FormFieldTextbox = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  label = defaultArgs.label,
  value = defaultArgs.value,
  description = defaultArgs.description,
  invalid = defaultArgs.invalid,
  invalidDescription = defaultArgs.invalidDescription,
  headingLevel = null,
  FormComponent = Textbox,
  autoComplete,
  inputMode,
  dir,
  placeholder,
  placeholderDir,
  type,
}) => {
  const descriptionId = description ? `${id}-description` : null;
  const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : null;
  return (
    <FormField invalid={invalid} type="textbox">
      {headingLevel ? (
        <Heading level={headingLevel} className="utrecht-form-field__label" htmlFor={id}>
          <FormLabel htmlFor={id}>{label}</FormLabel>
        </Heading>
      ) : (
        <FormLabel className="utrecht-form-field__label" htmlFor={id}>
          {label}
        </FormLabel>
      )}
      {description ? (
        <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
          {description}
        </FormFieldDescription>
      ) : undefined}
      {invalidDescription ? (
        <FormFieldDescription id={invalidDescriptionId} status="invalid" className="utrecht-form-field__description">
          {invalidDescription}
        </FormFieldDescription>
      ) : undefined}
      <FormComponent
        className="utrecht-form-field__input"
        id={id}
        value={value}
        name={name}
        autoComplete={autoComplete}
        type={type}
        inputMode={inputMode}
        dir={dir}
        placeholder={placeholder}
        placeholderDir={placeholderDir}
        aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null}
      />
    </FormField>
  );
};

export default FormFieldTextbox;

export const FormFieldCheckbox = ({
  id = defaultArgs.id,
  invalid = defaultArgs.invalid,
  name = defaultArgs.name,
  label = defaultArgs.label,
  required = defaultArgs.required,
  value = defaultArgs.value,
  description = defaultArgs.description,
  implicitLabel = true,
  invalidDescription = defaultArgs.invalidDescription,
}) => {
  const descriptionId = description ? `${id}-description` : null;
  const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : null;
  const checkbox = (
    <Checkbox
      aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null}
      className="utrecht-form-field__input"
      custom={true}
      id={id}
      invalid={invalid}
      required={required}
      name={name}
      value={value}
    />
  );

  return (
    <FormField invalid={invalid} type="checkbox">
      <p className="utrecht-form-field__label utrecht-form-field__label--checkbox">
        <FormLabel type="checkbox" htmlFor={id}>
          {implicitLabel && checkbox}
          {label}
        </FormLabel>
      </p>
      {description ? (
        <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
          {description}
        </FormFieldDescription>
      ) : undefined}
      {invalidDescription ? (
        <FormFieldDescription id={invalidDescriptionId} status="invalid" className="utrecht-form-field__description">
          {invalidDescription}
        </FormFieldDescription>
      ) : undefined}
      {!implicitLabel && checkbox}
    </FormField>
  );
};

export const FormFieldCheckboxGroup = ({
  groupId,
  groupLabel,
  groupDescription,
  groupInvalidDescription = defaultArgs.invalidDescription,
  groupName,
  invalid = defaultArgs.invalid,
  implicitLabel = true,
  options = [],
  headingLevel,
}) => {
  const groupDescriptionId = groupId && groupDescription ? `${groupId}-description` : null;
  const groupInvalidDescriptionId = groupInvalidDescription ? `${groupId}-invalid-description` : null;
  const groupDescribedByIds = [groupDescriptionId, groupInvalidDescriptionId].filter(Boolean).join(' ');
  return (
    <FormFieldset id={groupId} aria-describedby={groupDescribedByIds} invalid={invalid}>
      <FormFieldsetLegend>
        {headingLevel ? <Heading level={headingLevel}>{groupLabel}</Heading> : groupLabel}
      </FormFieldsetLegend>
      {groupDescriptionId ? (
        <FormFieldDescription id={groupDescriptionId}>{groupDescription}</FormFieldDescription>
      ) : undefined}
      {groupInvalidDescriptionId ? (
        <FormFieldDescription id={groupInvalidDescriptionId} status="invalid">
          {groupInvalidDescription}
        </FormFieldDescription>
      ) : undefined}
      {options.map(({ description, checked, id, invalid, invalidDescription, label, name, value }) => {
        const descriptionId = `${id}-description`;
        const invalidDescriptionId = invalid ? `${id}-invalid-description` : null;
        const checkbox = (
          <Checkbox
            className="utrecht-form-field__input"
            id={id}
            value={value}
            name={name || groupName}
            defaultChecked={checked}
            custom={true}
            aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null}
          />
        );
        return (
          <FormField invalid={invalid} type="checkbox" key={id}>
            <p className="utrecht-form-field__label utrecht-form-field__label--checkbox">
              <FormLabel type="checkbox" htmlFor={id}>
                {implicitLabel && checkbox}
                {label}
              </FormLabel>
            </p>
            {description ? (
              <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
                {description}
              </FormFieldDescription>
            ) : undefined}
            {invalidDescription ? (
              <FormFieldDescription
                id={invalidDescriptionId}
                status="invalid"
                className="utrecht-form-field__description"
              >
                {invalidDescription}
              </FormFieldDescription>
            ) : undefined}
            {!implicitLabel && checkbox}
          </FormField>
        );
      })}
    </FormFieldset>
  );
};

export const FormFieldRadioGroup = ({
  name = defaultArgs.name,
  groupId = defaultArgs.id,
  groupLabel,
  groupDescription,
  invalid = defaultArgs.invalid,
  groupInvalidDescription,
  implicitLabel = true,
  options,
  headingLevel,
}) => {
  const groupDescriptionId = groupDescription ? `${groupId}-description` : null;
  const groupInvalidDescriptionId = groupInvalidDescription ? `${groupId}-invalid-description` : null;
  const groupDescribedByIds = [groupDescriptionId, groupInvalidDescriptionId].filter(Boolean);
  const groupDescribedBy = groupDescribedByIds.length ? groupDescribedByIds.join(' ') : undefined;
  return (
    <FormFieldset role="radiogroup" id={groupId} aria-describedby={groupDescribedBy} invalid={invalid}>
      <FormFieldsetLegend>
        {headingLevel ? <Heading level={headingLevel}>{groupLabel}</Heading> : groupLabel}
      </FormFieldsetLegend>
      {groupDescription ? (
        <FormFieldDescription id={groupDescriptionId}>{groupDescription}</FormFieldDescription>
      ) : undefined}
      {groupInvalidDescription ? (
        <FormFieldDescription status="invalid" id={groupInvalidDescriptionId}>
          {groupInvalidDescription}
        </FormFieldDescription>
      ) : undefined}
      {options.map(({ id, label, description, invalidDescription, value }) => {
        const descriptionId = description ? `${id}-description` : null;
        const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : null;
        const input = (
          <RadioButton
            className="utrecht-form-field__input"
            id={id}
            value={value}
            name={name}
            custom={true}
            aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null}
          />
        );
        return (
          <FormField type="radio" key={id}>
            <p className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel type="radio" htmlFor={id}>
                {implicitLabel && input}
                {label}
              </FormLabel>
            </p>
            {description ? (
              <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
                {description}
              </FormFieldDescription>
            ) : undefined}
            {invalidDescription ? (
              <FormFieldDescription
                id={invalidDescriptionId}
                status="invalid"
                className="utrecht-form-field__description"
              >
                {invalidDescription}
              </FormFieldDescription>
            ) : undefined}
            {!implicitLabel && input}
          </FormField>
        );
      })}
    </FormFieldset>
  );
};

export const FormFieldExample = ({ control, ...restProps }) => {
  if (control === 'text' || control === 'textarea') {
    let component = control === 'textarea' ? Textarea : Textbox;
    return FormFieldTextbox({ ...restProps, component });
  } else {
    return <></>;
  }
};

export const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);
