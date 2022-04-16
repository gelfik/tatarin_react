// import { Type } from '@angular/core';

import { ClassType } from "react";

/**
 * Возвращает массив с инстансами класса
 * @param Class класс в который нужно преобразовать элементы
 * @param items массив с элементами, которые необходимо преобразовать в инстансы класса
 */

export const getClassInstances = <T, K>(
  Class: ClassType<T, any, any>,
  items: Array<K> | undefined
): T[] | [] => {
  return items && items.length ? items.map((item: K) => new Class(item)) : [];
};
