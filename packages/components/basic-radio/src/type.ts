import { RadioProps, RadioGroupProps } from "element-plus";
import type { SelectiveRequired } from "@center/utils";

type EPlusRadioProps = SelectiveRequired<RadioProps, "label">;

type EPlusRadioGroupProps = SelectiveRequired<RadioGroupProps>;

export type Value = string | number | boolean | undefined;

export interface SingleRadio extends /* @vue-ignore */ EPlusRadioProps {
  label: string;
  value?: Value;

  customProps?: Recordable;
  customSlot?: Recordable;
  customRender?: Recordable;
}

export interface BasicRadioProps
  extends /* @vue-ignore */ EPlusRadioGroupProps {
  options?: SingleRadio[];
  api?: () => Promise<unknown>;
  resultField?: string;
  labelField?: string;
  valueField?: string;

  value?: Value;
  isButton?: boolean;
}

export interface BasicRadioEmits {
  (e: "update:modelValue", value: Value): void;
  (e: "change", value: Value): void;
}
