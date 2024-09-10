为什么一定需要它？

1.EPlus radio 有3种用法，radio radio-group radio-button，而如果使用 BasicRadio 的话，这3种都支持，若想使用 radio-button 只需要传 props button="true"即可

2.EPlus 的radio在选中后无法取消选中，而 BasicRadio 支持选中后再点击取消选中

3.BasicRadio 可以直接传入options，组件内部自动循环渲染各个radio

4.radio选项可以通过options传入，也可以传入一个api，api返回的结果作为options的选项

1.如果只传入一个radio，则只渲染一个radio，如果传入一个options数组，则循环渲染各个radio
2.element-plus radio在选中后无法取消选中，而 BasicRadio需要支持选中后再点击取消选中3. element-plus radio 有3种用法，el-radio el-radio-group el-radio-button，而如果使用BasicRadio 的话，这3种都支持，若想使用 radio-button 只需要传 props button="true"即可
4.radio选项可以通过options传入，也可以传入一个api，api返回的结果作为options的选项
