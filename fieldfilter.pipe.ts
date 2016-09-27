import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'fieldFilter'
})

@Injectable()
export class FieldFilter implements PipeTransform {
    transform(items: any[], key : string[], value: string) {
        if (!items || !value) 
            return items;
        return items.filter( item => this.tempfunc(item,key,value) );
    }

    tempfunc(item:any,key:string[],value:string) {
        if( value !== undefined && value !== null) {
            if(key.length === 1 && key[0] === '') {
                if(item.toLowerCase().indexOf(value.toLowerCase()) !== -1)
                    return true;
            }
            else {
                for(let i = 0; i<key.length;i++) {
                    if(item[key[i]].toLowerCase().indexOf(value.toLowerCase()) !== -1)
                        return true;
                }
            }
        }
        return false;
    }
}
