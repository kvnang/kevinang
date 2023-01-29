import * as React from 'react';

export function FormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap -m-[var(--form-field-gap)]">{children}</div>
  );
}

export function FormField({
  variant: _variant = [],
  fieldset,
  ...props
}: { variant?: string | string[]; fieldset?: boolean } & {
  [key: string]: any;
}) {
  const variant = Array.isArray(_variant) ? _variant : [_variant];

  if (fieldset) {
    return (
      <fieldset
        data-variant={variant.join(' ')}
        className={`p-[var(--form-field-gap)] w-full ${
          variant.includes('half') ? 'sm:w-1/2' : ''
        } ${
          variant.includes('consent')
            ? 'w-auto max-w-lg py-[var(--form-field-gap)] [&_.form-field--submit]:pt-0'
            : ''
        } ${
          variant.includes('submit')
            ? 'flex justify-between items-center [&_button]:ml-6'
            : ''
        } ${
          variant.includes('single') ? 'md:w-3/4 lg:w-1/2' : ''
        } mb-[calc(var(--form-field-gap)_*_2)] last-of-type:mb-0`}
        {...props}
      >
        {props.children}
      </fieldset>
    );
  }
  return (
    <div
      data-variant={variant.join(' ')}
      className={`p-[var(--form-field-gap)] w-full ${
        variant.includes('half') ? 'sm:w-1/2' : ''
      } ${
        variant.includes('consent')
          ? 'w-auto max-w-lg py-[var(--form-field-gap)] [&_.form-field--submit]:pt-0'
          : ''
      } ${
        variant.includes('submit')
          ? 'flex justify-between items-center [&_button]:ml-6'
          : ''
      } ${variant.includes('single') ? 'md:w-3/4 lg:w-1/2' : ''} ${
        variant.includes('footer') && variant.includes('consent') ? 'mr-4' : ''
      } ${
        variant.includes('footer') && variant.includes('submit')
          ? 'items-start w-auto ml-auto pt-[var(--form-field-gap)]'
          : ''
      }`}
    >
      {props.children}
    </div>
  );
}

export function FormFieldRadioGroup({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap -my-2 -mx-[var(--radio-spacing-h)] ${className}`}
    >
      {children}
    </div>
  );
}

export function FormFieldRadio({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`py-2 px-[var(--radio-spacing-h)] flex items-center ${className}`}
    >
      {children}
    </div>
  );
}

export function FormFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="form-footer flex flex-wrap basis-full pt-[var(--form-field-gap)]">
      {children}
    </div>
  );
}
