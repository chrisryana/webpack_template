import * as C from './lib/const';

export interface InputItem {
  alias: string,
  label: string,
  regular: object,
  required: boolean,
  type: string,
  value?: string,
  isVerify: null | boolean,
};

export interface RadioItem {
  name: string,
  alias: string,
  label: string,
}

export interface Step {
  type: string,
  legend?: string,
  choosen?: string,
  content?: Array<InputItem | RadioItem>,
  [C.TYPE_ENTITY]?: InputItem[],
  [C.TYPE_INDENT]?: InputItem[],
}

export interface Stepper {
  stepper: Step[],
}