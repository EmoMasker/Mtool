/**
 * @desc 防抖函数
 * @param func 绑定函数
 * @param wait 延迟执行毫秒数
 * @param immediate true立即执行，false非立即执行
 */
export default function debounce(
  func: Function,
  wait: number = 1000,
  immediate: boolean = true
): Function {
  let timeout: number = 0;
  return function () {
    let that: any = this;
    let arges: any = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      if (timeout === 0) {
        func.apply(that, arges);
      }
      timeout = setTimeout(function () {
        timeout = 0;
      }, wait);
    } else {
      timeout = setTimeout(function () {
        func.apply(that, arges);
      }, wait);
    }
  };
}