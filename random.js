// 随机数相关的方法

// ========== 固定位数的随机数 ==========

/**
 * 生成n位纯数字随机字符串
 * @param {Number} n 随机数的位数
 * @returns {String} 字符串
 */
function genRandomNums(n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    res += Math.floor(Math.random() * 10);
  }
  return res;
}

/**
 * 生成n位混合随机字符串
 * @param {Number} n 随机数的位数
 * @returns {String} 字符串
 */
function genRandomMixed(n) {
  let res = '';
  const chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * chars.length);
    res += chars[index];
  }
  return res;
}

// ========== 范围内的随机数 ==========

/**
 * 生成 [min, max) 范围内随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns {Number} 随机数
 */
function genRandomBetween(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}
