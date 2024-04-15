import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
})

export class SearchBoxComponent {

  // El ViewChild nos sirve para tomar una referencia local en este caso de un  & el view Children nos serviria para tomar la referencia de varios 
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}
 
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
  }

}
