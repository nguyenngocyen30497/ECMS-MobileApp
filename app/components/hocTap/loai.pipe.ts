import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loai'
})
export class LoaiPipe implements PipeTransform {

  transform( arrDeCuong: any[],
              texto: string,
              columna: string): any[] {
    if(texto === ''){
      return arrDeCuong
    }
    texto = texto.toLowerCase();

    return arrDeCuong.filter(item =>{
      return item[columna].toLowerCase().includes(texto);
    })
  }

}
