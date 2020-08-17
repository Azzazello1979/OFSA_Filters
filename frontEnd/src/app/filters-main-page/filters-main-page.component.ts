import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters-main-page',
  templateUrl: './filters-main-page.component.html',
  styleUrls: ['./filters-main-page.component.css'],
})
export class FiltersMainPageComponent implements OnInit {
  filtersSearchForm: FormGroup;
  folders = [
    { id: 1, name: 'Folder-1' },
    { id: 2, name: 'Folder-2' },
    { id: 3, name: 'Folder-3' },
    { id: 4, name: 'Folder-4' },
    { id: 5, name: 'Folder-5' },
  ];
  filterType = [
    { id: 1, name: 'Hierarchy' },
    { id: 2, name: 'Data Element' },
    { id: 3, name: 'Group' },
  ];

  filterTableData = [
    { id: 1, name: 'Filter-1', folder: 'Folder-2', type: 'Hierarchy' },
    { id: 2, name: 'Filter-2', folder: 'Folder-2', type: 'Hierarchy' },
    { id: 3, name: 'Filter-3', folder: 'Folder-2', type: 'Data Element' },
    { id: 4, name: 'Filter-4', folder: 'Folder-1', type: 'Group' },
    { id: 5, name: 'Filter-5', folder: 'Folder-3', type: 'Hierarchy' },
  ];

  onFiltersSearchFormSubmit() {
    console.log(this.filtersSearchForm);
  }

  ngOnInit() {
    this.filtersSearchForm = new FormGroup({
      folderName: new FormControl(),
      filterType: new FormControl(),
      filterName: new FormControl(),
    });
  }
}
