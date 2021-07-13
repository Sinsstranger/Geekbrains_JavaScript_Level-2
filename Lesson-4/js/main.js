'use strict';
/**
 * Задача 1 и 2
 * @type {RegExp}
 */
const taskOnePattern = /(:?'\B|\B')/gim;
document.querySelector('.taskOneAndTwo').textContent = document.querySelector('.taskOneAndTwo').textContent.replace(taskOnePattern, '"');