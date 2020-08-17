import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface FilterRecord {
  id: number;
  name: string;
  folder: string;
  type: string;
  modificationDate: string;
  modifiedBy: string;
}

@Component({
  selector: 'app-filters-main-page',
  templateUrl: './filters-main-page.component.html',
  styleUrls: ['./filters-main-page.component.css'],
})
export class FiltersMainPageComponent implements OnInit {
  currentSearchText: string = '';
  filteredFilters: FilterRecord[] = [];
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

  FILTER_TABLE_DATA = [
    {
      id: 1,
      name: 'Filter-1',
      folder: 'Folder-2',
      type: 'Hierarchy',
      modificationDate: '2020-01-01',
      modifiedBy: 'Gustavo',
    },
    {
      id: 2,
      name: 'Filter-2',
      folder: 'Folder-2',
      type: 'Hierarchy',
      modificationDate: '2020-01-01',
      modifiedBy: 'Karlson',
    },
    {
      id: 3,
      name: 'Filter-3',
      folder: 'Folder-2',
      type: 'Data Element',
      modificationDate: '2020-01-01',
      modifiedBy: 'Klaus',
    },
    {
      id: 4,
      name: 'Filter-4',
      folder: 'Folder-1',
      type: 'Group',
      modificationDate: '2020-01-01',
      modifiedBy: 'Heimann',
    },
    {
      id: 5,
      name: 'Filter-5',
      folder: 'Folder-3',
      type: 'Hierarchy',
      modificationDate: '2020-01-01',
      modifiedBy: 'FitzPatrik',
    },
    {
      id: 6,
      name: 'Filter-6',
      folder: 'Folder-5',
      type: 'Data Element',
      modificationDate: '2020-01-01',
      modifiedBy: 'Jhonny',
    },
    {
      id: 7,
      name: 'Filter-7',
      folder: 'Folder-2',
      type: 'Data Element',
      modificationDate: '2020-01-01',
      modifiedBy: 'Sarah',
    },
    {
      id: 8,
      name: 'Filter-8',
      folder: 'Folder-1',
      type: 'Group',
      modificationDate: '2020-01-01',
      modifiedBy: 'Jenkins',
    },
  ];

  displayedColumns: string[] = [
    'select',
    'name',
    'folder',
    'type',
    'modificationDate',
    'modifiedBy',
  ];

  dataSource = new MatTableDataSource<FilterRecord>(this.FILTER_TABLE_DATA);
  selection = new SelectionModel<FilterRecord>(true, []);

  /* NG MATERIAL DATA TABLE IMPORTS START ***************************************************/

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: FilterRecord): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  /* NG MATERIAL DATA TABLE IMPORTS END ***************************************************/

  onFilterNameInput(e) {
    // filter filters by filter name
    // console.log(e.target.value);
    this.currentSearchText = e.target.value;
    this.filteredFilters = this.FILTER_TABLE_DATA.filter((record) =>
      record.name.match(new RegExp(this.currentSearchText, 'i'))
    );
    // console.log(this.filteredFilters);
    this.dataSource.data = [...this.filteredFilters];
  }

  onFiltersSearchFormSubmit() {
    console.log(this.filtersSearchForm);
  }

  ngOnInit() {
    this.selection.changed.subscribe((news) => {
      console.log(this.selection);
    });

    this.filtersSearchForm = new FormGroup({
      folderName: new FormControl(),
      filterType: new FormControl(),
      filterName: new FormControl(),
    });
  }
}
