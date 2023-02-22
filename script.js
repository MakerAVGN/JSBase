"use strict";
let r_circle = Number(prompt("Введите радиус круга: ")),
  Pi = Math.PI;
document.write(`Задание 1: ${Pi * r_circle ** 2}`);
let a_square = Number(prompt("Введите сторону квадрата: "));
document.write(`<br>Задание 2: ${a_square ** 2}`);
let l_rect = Number(prompt("Введите длинную сторону прямоугольника: ")),
  w_rect = Number(prompt("Введите короткую сторону прямоугольника: "));
document.write(`<br>Задание 3: ${w_rect * l_rect}`);
document.write(`<br>Задание 4: ${2 * (l_rect + w_rect)}`);
let tc = Number(prompt("Введите температуру в Цельсиях: "));
document.write(`<br>Задание 5: ${tc * (9 / 5) + 32}`);
let fc = Number(prompt("Введите температуру в Фаренгейтах: "));
document.write(`<br>Задание 6: ${(fc - 32) / (9 / 5)}`);