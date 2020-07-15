/**
 * @desc 节流函数
 * @param func 绑定函数
 * @param wait 间隔执行毫秒数
 */
export default function throttle(
  func: Function,
  wait: number = 1000
): Function {
  let timeout: number = 0;
  return function () {
    let that: any = this;
    let arges: any = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = 0;
      }, wait);
      func.apply(that, arges);
    }
  };
}
