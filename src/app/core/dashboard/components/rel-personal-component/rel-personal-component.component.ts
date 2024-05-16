import { Component } from '@angular/core';
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {NzInputDirective} from "ng-zorro-antd/input";
import {
  FormControl,
  FormGroup,
  FormRecord,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from "@angular/forms";
import {NgClass, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {NzEmptyComponent} from "ng-zorro-antd/empty";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormDirective, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTableComponent} from "ng-zorro-antd/table";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import Personal from "../../../../shared/interfaces/Personal";
import {DataService} from "../../../../services/data.service";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzFlexDirective} from "ng-zorro-antd/flex";

@Component({
  selector: 'app-rel-personal-component',
  standalone: true,
  imports: [
    NzTypographyComponent,
    NzInputDirective,
    FormsModule,
    NgIf,
    NzEmptyComponent,
    ReactiveFormsModule,
    NzRowDirective,
    NzColDirective,
    NzFormLabelComponent,
    NzButtonComponent,
    NzIconDirective,
    NzTableComponent,
    NzDividerComponent,
    NgForOf,
    NzOptionComponent,
    NzSelectComponent,
    NzFormDirective,
    NgClass,
    UpperCasePipe,
    NzFlexDirective
  ],
  templateUrl: './rel-personal-component.component.html',
  styleUrl: './rel-personal-component.component.css'
})
export class RelPersonalComponentComponent {
  searchForm: FormGroup;

  centros: string[] = ['Todos'];

  hasResults = false;

  personalData: Personal[] = [];
  filteredPersonalData: Personal[] = [];

  constructor(private fb: NonNullableFormBuilder, private dataService: DataService) {

    this.searchForm = this.fb.group({
      cargo: [''],
      nombresDNI: [''],
      centro: ['Todos']
    });

    this.personalData = this.dataService.getPersonalData();
    this.filteredPersonalData = this.personalData;
    this.centros= this.centros.concat(this.dataService.getCentros());
  }

  onSearch(): void {
    const cargo = this.searchForm.get('cargo')?.value;
    const nombresDNI = this.searchForm.get('nombresDNI')?.value;
    const centro = this.searchForm.get('centro')?.value;


    this.filteredPersonalData = this.dataService.filterPersonalData(cargo, nombresDNI, centro);
    this.hasResults = this.filteredPersonalData.length > 0;
  }

  onReset(): void {
    this.searchForm.reset();
    this.filteredPersonalData = this.personalData;
    this.hasResults = true;
  }

  protected readonly top = top;
}
