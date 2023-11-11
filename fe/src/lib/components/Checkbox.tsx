import React, { forwardRef } from "react";
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps,
} from "react-aria-components";
import { cn } from "../utils/utils";

interface Props extends Omit<CheckboxProps, "children"> {
  children?: React.ReactNode;
  checkboxClassName?: string;
}
const baseClass1 = "group rounded outline-none items-center";
const baseClass2 =
  "w-2 h-2 p-0.5 text-lg border-2 border-solid border-primary-950 rounded transition-[outline_background-color_border-color] ease-in-out group-rac-selected:bg-primary-500 group-rac-selected:border-primary-500 group-rac-focus-visible:outline-focus";
const baseClass3 =
  "stroke-primary-50 mb-[16px] transition-[stroke-dashoffset_stroke] z-30 ease-in-out duration-300 [stroke-dashoffset:66] group-rac-selected:[stroke-dashoffset:44]";

const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { children, className, checkboxClassName, ...props }: Props,
  ref
) {
  return (
    <AriaCheckbox {...props} ref={ref} className={cn(baseClass1, className)}>
      <div className={cn(baseClass2, baseClass2)}>
        <svg
          viewBox="-2 2 20 20"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="3px"
          strokeDasharray="22px"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={baseClass3}
        >
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      <span className="text-sm text-primary-950">{children}</span>
    </AriaCheckbox>
  );
});

export default Checkbox;
