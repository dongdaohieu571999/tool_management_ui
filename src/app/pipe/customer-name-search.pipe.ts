import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerNameSearch'
})
export class CustomerNameSearchPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.code.toLocaleLowerCase().includes(searchText);
    });
  }


}
