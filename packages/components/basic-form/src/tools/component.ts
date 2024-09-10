import type { ComponentType } from "../type";
import type { Component } from "vue";

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
import { BasicCheckbox, BasicRadio, BasicSelect } from "@center/components";

const componentMap = new Map<ComponentType, Component>();
componentMap.set("radio", BasicRadio);
componentMap.set("checkbox", BasicCheckbox);
componentMap.set("select", BasicSelect);

function getComponent(component: ComponentType): Component {
  return componentMap.get(component) || ElInput;
}

export { getComponent };
