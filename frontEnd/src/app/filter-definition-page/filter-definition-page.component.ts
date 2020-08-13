import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-definition-page',
  templateUrl: './filter-definition-page.component.html',
  styleUrls: ['./filter-definition-page.component.css'],
})
export class FilterDefinitionPageComponent implements OnInit {
  /* overall */
  filterDefinitionForm: FormGroup;
  /* shared */
  filterDetails: FormGroup;
  filterTypeSelection: FormGroup;
  /* specific */
  hierarchyFilters: FormGroup;
  dataElementFilters: FormGroup;
  groupfilters: FormGroup;

  folders = [
    { id: 1, name: 'folder1' },
    { id: 2, name: 'folder2' },
    { id: 3, name: 'folder3' },
  ];

  onSubmit() {
    console.log(this.filterDefinitionForm);
  }

  ngOnInit(): void {
    this.filterDefinitionForm = new FormGroup({
      filterDetails: new FormGroup({
        folderName: new FormControl(),
        filterName: new FormControl(),
        accessType: new FormControl(),
        description: new FormControl(),
      }),
      filterTypeSelection: new FormGroup({}),
      hierarchyFilters: new FormGroup({}),
    });
  }
}
