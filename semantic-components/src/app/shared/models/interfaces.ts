export interface RowData {
  name: string;
  age: number;
  job: string;
  isEmployed: boolean;
}

export interface HeaderData {
  key: keyof RowData;
  label: string;
}

export interface StatisticData {
  value: number;
  label: string;
}

export interface ListItem {
  image: string;
  title: string;
  description: string;
}

export interface AccordionData {
  title: string;
  content: string;
}
