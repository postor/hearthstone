import BaseObject from "../BaseObject";

/**
 * 事件基类
 */
export default class BaseEvent {

  constructor(public name: string, public from: BaseObject, public targets: BaseObject[]) {
  }

  excute() {

  }
}