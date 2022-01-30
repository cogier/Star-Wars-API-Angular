import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addType',
})
export class AddTypePipe implements PipeTransform {
    transform(value: string, type: string): string {
        if (value === "unknown" || value === "0") {
            return value;
        }
        else {
            return value + " " + type;
        }
    }
}