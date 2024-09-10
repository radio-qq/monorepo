import { RadioProps, RadioGroupProps, RadioGroupEmits } from 'element-plus'

export type Value = string | number | boolean | undefined

export interface Option extends RadioProps {
  customProps?: Recordable
  customSlot?: Recordable
  customRender?: Recordable
}

export interface BasicRadioProps extends Partial<RadioGroupProps> {
  options?: Option[]
  api?: () => Promise<unknown>
  resultField?: string
  labelField?: string
  valueField?: string
}

export interface BasicRadioEmits {
  (e: 'update:modelValue', value: Value): void
  (e: 'change', value: Value): void
}
