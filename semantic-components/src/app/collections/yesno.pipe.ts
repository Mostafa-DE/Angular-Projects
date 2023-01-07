import {Pipe, PipeTransform} from '@angular/core';
import {RowData} from "../shared/models/interfaces";

type RowDataValues = RowData[keyof RowData];

@Pipe({
  name: 'yesno'
})
export class YesnoPipe implements PipeTransform {
  transform(value: RowDataValues): RowDataValues {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value;
  }

}
