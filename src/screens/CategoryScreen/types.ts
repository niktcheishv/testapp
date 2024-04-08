import {ListRenderItem} from 'react-native';

interface ExpenseItem<T> {
  order: number;
  value: T;
  placeholder: string;
}

export type Expense = {
  category: ExpenseItem<string>;
  company: ExpenseItem<string>;
  date: ExpenseItem<string>;
  cost: ExpenseItem<string>;
  rate: ExpenseItem<number>;
  allowingOil?: ExpenseItem<string>;
  oilLiter?: ExpenseItem<string>;
};

export interface IExpense {
  id: string;
  item: Expense;
}

export type RenderItemProps = {
  item: IExpense;
  category: string;
  isDefault: boolean;
};

export type RenderItemT = ListRenderItem<IExpense>;
