export interface ITodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
  description: string;
}

export interface IColors {
  textColor: string;
  backgroundColor: string;
}

export interface IThemes {
  light: IColors;
  dark: IColors;
}
