import * as React from "react";

type LabelType = string | React.ReactNode;

interface BaseProps {
  label: LabelType;
  hiddenLabel?: boolean;
  wrapperClassName?: string;
}

type InputProps = { innerRef?: React.Ref<HTMLInputElement> } & BaseProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

type TextAreaProps = { innerRef?: React.Ref<HTMLTextAreaElement> } & BaseProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

type SelectProps = { innerRef?: React.Ref<HTMLSelectElement> } & BaseProps &
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;

interface RegisterProps {
  name?: string;
}

export const focusClass =
  "focus:outline-offset-2 focus:outline-accent focus:outline-2 focus:outline";

export function Input({
  label,
  hiddenLabel,
  wrapperClassName,
  className,
  innerRef,
  ...props
}: InputProps & RegisterProps): JSX.Element {
  const id = props.id || props.name;

  if (props.type === "checkbox" || props.type === "radio") {
    return (
      <label htmlFor={id} className="flex text-p">
        <input
          id={id}
          ref={innerRef}
          className={`peer disabled:opacity-50 ${focusClass}`}
          {...props}
        />
        <span className="peer-disabled:opacity-50">
          {label}
          {props.required && (
            <abbr className="text-error no-underline pl-1" title="required">
              *
            </abbr>
          )}
        </span>
      </label>
    );
  }

  return (
    <label htmlFor={id} className={`block relative ${wrapperClassName || ""}`}>
      <input
        id={id}
        ref={innerRef}
        className={`peer w-full disabled:opacity-50 rounded-md border-[1px] border-body-0 bg-transparent px-4 aria-[invalid=true]:border-error placeholder:opacity-75 placeholder:text-paragraph ${
          hiddenLabel
            ? "py-3"
            : "pt-5 pb-1 [&:placeholder-shown:not(:focus)]:placeholder:opacity-0 transition-all"
        } ${props.type === "search" ? "pr-10" : ""} ${focusClass} ${
          className || ""
        }`}
        {...props}
      />
      <span
        className={
          hiddenLabel
            ? "sr-only"
            : "pointer-events-none absolute top-3 -translate-y-1/3 left-4 scale-[0.67] opacity-75 translate-x-0.5 transition-all origin-top-left peer-[:placeholder-shown:not(:focus)]:translate-y-0 peer-[:placeholder-shown:not(:focus)]:scale-100 peer-focus:text-teal peer-focus:opacity-100"
        }
      >
        {label}
        {props.required && (
          <abbr className="text-error no-underline pl-1" title="required">
            *
          </abbr>
        )}
      </span>
    </label>
  );
}

export function TextArea({
  label,
  hiddenLabel,
  wrapperClassName,
  className,
  innerRef,
  ...props
}: TextAreaProps & RegisterProps): JSX.Element {
  const id = props.id || props.name;

  return (
    <label htmlFor={id} className={`block relative ${wrapperClassName || ""}`}>
      <textarea
        id={id}
        ref={innerRef}
        className={`peer w-full disabled:opacity-50 rounded-md border-[1px] border-body-0 bg-transparent px-4 aria-[invalid=true]:border-error placeholder:opacity-75 placeholder:text-paragraph 
        ${
          hiddenLabel
            ? "py-3"
            : "pt-5 pb-1 [&:placeholder-shown:not(:focus)]:placeholder:opacity-0 transition-all"
        } ${focusClass} ${className || ""}`}
        {...props}
      />
      <span
        className={
          hiddenLabel
            ? `sr-only`
            : `pointer-events-none absolute top-3 -translate-y-1/3 left-4 scale-[0.67] opacity-75 translate-x-0.5 transition-all origin-top-left peer-[:placeholder-shown:not(:focus)]:translate-y-0 peer-[:placeholder-shown:not(:focus)]:scale-100 peer-focus:text-teal peer-focus:opacity-100`
        }
      >
        {label}
        {props.required && (
          <abbr className="text-error no-underline pl-1" title="required">
            *
          </abbr>
        )}
      </span>
    </label>
  );
}

export function Select({
  label,
  hiddenLabel,
  wrapperClassName,
  className,
  innerRef,
  ...props
}: SelectProps & RegisterProps): JSX.Element {
  const id = props.id || props.name;

  return (
    <label htmlFor={id} className={`block relative ${wrapperClassName || ""}`}>
      <select
        id={id}
        ref={innerRef}
        className={`peer w-full disabled:opacity-50 rounded-md border-[1px] border-body-0 bg-transparent pl-4 pr-10 aria-[invalid=true]:border-error placeholder:opacity-75 placeholder:text-paragraph ${
          hiddenLabel
            ? "py-3"
            : "pt-5 pb-1 [&:placeholder-shown:not(:focus)]:placeholder:opacity-0 transition-all"
        } ${focusClass} ${className || ""}`}
        {...props}
      >
        {props.children}
      </select>
      <span
        className={
          hiddenLabel
            ? "sr-only"
            : "pointer-events-none absolute top-3 -translate-y-1/3 left-4 scale-[0.67] opacity-75 translate-x-0.5 transition-all origin-top-left peer-[:placeholder-shown:not(:focus)]:translate-y-0 peer-[:placeholder-shown:not(:focus)]:scale-100 peer-focus:text-teal peer-focus:opacity-100"
        }
      >
        {label}
        {props.required && (
          <abbr className="text-error no-underline pl-1" title="required">
            *
          </abbr>
        )}
      </span>
    </label>
  );
}
