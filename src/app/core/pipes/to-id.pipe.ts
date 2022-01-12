import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toId',
})
export class ToIdPipe implements PipeTransform {
    transform(url: string): number {
        const parts = url.split('/').filter(s => s.length);
        return parseInt(parts[parts.length - 1], 10);
    }
}
