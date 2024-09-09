import { useNamespace } from "element-plus";

const basic = ref("basic");

export const useBasicNamespace = (name) => useNamespace(name, basic);
