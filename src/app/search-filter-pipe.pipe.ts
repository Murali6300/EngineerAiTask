import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(apidata: any[], searchText : any): any {
    if(!searchText){
      return apidata
    }
    return apidata.filter(item =>{ 
      return item.first_name.toLowerCase().match(searchText)
    })
    ;
  }

}
