import type { ComponentType } from "../types";
import {
  ElInput,
  ElInputNumber,
  ElDatePicker,
  ElTimePicker,
  ElCheckbox,
  ElCascader,
  ElTreeSelect,
  ElSwitch,
  ElRate,
  ElSlider,
  ElTransfer,
  ElColorPicker,
} from "element-plus";
import BasicCheckboxGroup from "@/components/basic-checkbox/BasicCheckboxGroup.vue";
import BasicRadioGroup from "@/components/basic-radio/BasicRadioGroup.vue";
import BasicSelect from "@/components/basic-select/BasicSelect.vue";
import type { Component } from "vue";

const componentMap = new Map<ComponentType, Component>();

componentMap.set("input", ElInput);
componentMap.set("input-number", ElInputNumber);
componentMap.set("textarea", ElInput);
componentMap.set("radio-group", BasicRadioGroup);
componentMap.set("checkbox", ElCheckbox);
componentMap.set("checkbox-group", BasicCheckboxGroup);
componentMap.set("select", BasicSelect);
componentMap.set("tree-select", ElTreeSelect);
componentMap.set("cascader", ElCascader);
componentMap.set("transfer", ElTransfer);
componentMap.set("date-picker", ElDatePicker);
componentMap.set("time-picker", ElTimePicker);
componentMap.set("switch", ElSwitch);
componentMap.set("rate", ElRate);
componentMap.set("slider", ElSlider);
componentMap.set("color-picker", ElColorPicker);

function getComponent(component: ComponentType): Component {
  return componentMap.get(component) || ElInput;
}

export { getComponent };
