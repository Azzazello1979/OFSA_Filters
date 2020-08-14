import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-definition-page',
  templateUrl: './filter-definition-page.component.html',
  styleUrls: ['./filter-definition-page.component.css'],
})
export class FilterDefinitionPageComponent implements OnInit, AfterViewInit {
  controlType: string = '';
  controlTypes: string[] = [];
  /* testing formArray */
  arrayForm: FormGroup;
  /* overall */
  filterDefinitionForm: FormGroup;
  /* shared */
  filterDetails: FormGroup;
  filterTypeSelection: FormGroup;
  /* specific */
  hierarchyFilters: FormGroup;
  dataElementFilters: FormGroup;
  groupfilters: FormGroup;
  activeSpecificForm = { filterType: 'none' }; // {filterType: "2"}
  dataElementFilterMethod = {
    dataElementSelection: null,
    filterMethod: 'none',
  }; // {dataElementSelection: null, filterMethod: 'none'}

  folders = [
    { id: 1, name: 'folder1' },
    { id: 2, name: 'folder2' },
    { id: 3, name: 'folder3' },
  ];

  accessTypeOptions = ['readOnly', 'readWrite'];

  filterTypes = [
    { id: 1, name: 'Hierarchy' },
    { id: 2, name: 'Data Element' },
    { id: 3, name: 'Group' },
  ];

  dimensions = [
    { id: 1, name: 'DIM1' },
    { id: 2, name: 'DIM2' },
    { id: 3, name: 'DIM3' },
  ];

  hierarchies = [
    { id: 1, name: 'Products' },
    { id: 2, name: 'Loans' },
    { id: 3, name: 'GoldMines' },
  ];

  dataElements = [
    { id: 1, name: 'data element 1' },
    { id: 2, name: 'data element 2' },
    { id: 3, name: 'data element 3' },
  ];

  dataElementfilterMethods = [
    { id: 1, name: 'Specific Values' },
    { id: 2, name: 'Range' },
    { id: 3, name: 'Other Data Element' },
    { id: 4, name: 'Expressions' },
  ];
  inputControlOptions = ['', 'date', 'range', 'color', 'password', 'text'];

  updateControlType(e) {
    this.controlType = e.target.value;
  }

  onArrayFormSubmit() {
    console.log(this.arrayForm);
  }

  onSubmit() {
    console.log(this.filterDefinitionForm);
  }

  // ----------------- arrayForm starts
  addSpecialControls() {
    if (this.controlType !== '') {
      this.controlTypes.push(this.controlType);
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.arrayForm.get('specialControls')).push(control);
      this.controlType = '';
      //console.log(this.getSpecialControls().length);
    }
  }

  getSpecialControls() {
    return (<FormArray>this.arrayForm.get('specialControls')).controls;
  }
  // ----------------- arrayForm ends

  getSpecificValueControls() {
    return (<FormArray>(
      this.filterDefinitionForm.get(
        'dataElementFilters.specificValuesForm.specificValues'
      )
    )).controls;
  }

  onAddSpecificValue() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>(
      this.filterDefinitionForm.get(
        'dataElementFilters.specificValuesForm.specificValues'
      )
    )).push(control);
    console.log(
      (<FormArray>(
        this.filterDefinitionForm.get(
          'dataElementFilters.specificValuesForm.specificValues'
        )
      )).controls
    );
  }

  ngAfterViewInit() {
    this.filterDefinitionForm.controls.filterTypeSelection.valueChanges.subscribe(
      (news) => {
        this.activeSpecificForm = { ...news };
      }
    );
    this.filterDefinitionForm.controls.dataElementFilters.valueChanges.subscribe(
      (news) => {
        this.dataElementFilterMethod = { ...news };
        console.log(this.dataElementFilterMethod);
      }
    );
  }

  ngOnInit(): void {
    this.arrayForm = new FormGroup({
      select: new FormControl(),
      specialControls: new FormArray([]),
    });

    this.filterDefinitionForm = new FormGroup({
      filterDetails: new FormGroup({
        folderName: new FormControl(),
        filterName: new FormControl(),
        accessType: new FormControl(),
        description: new FormControl(),
      }),
      filterTypeSelection: new FormGroup({
        filterType: new FormControl(),
      }),
      hierarchyFilters: new FormGroup({
        dimension: new FormControl(),
        hierarchy: new FormControl(),
      }),
      dataElementFilters: new FormGroup({
        dataElementSelection: new FormControl(),
        filterMethod: new FormControl(),
        specificValuesForm: new FormGroup({
          specificValues: new FormArray([]),
        }),
      }),
    });
  }
}
