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
  filtersSearchForm: FormGroup;
  folders = [
    { id: 0, name: 'all' },
    { id: 1, name: 'Cheeses' },
    { id: 2, name: 'Breads' },
    { id: 3, name: 'Cocktails' },
    { id: 4, name: 'Wine' },
    { id: 5, name: 'Pasta' },
  ];

  filterType = [
    { id: 0, name: 'all' },
    { id: 1, name: 'Hierarchy' },
    { id: 2, name: 'Data Element' },
    { id: 3, name: 'Group' },
  ];

  FILTER_TABLE_DATA = [
    {
      id: 1,
      name: 'Camembert-filter',
      folder: 'Cheeses',
      type: 'Hierarchy',
      modificationDate: '2020-01-01',
      modifiedBy: 'Mr White',
    },
    {
      id: 2,
      name: 'Baguette-filter',
      folder: 'Breads',
      type: 'Hierarchy',
      modificationDate: '2020-01-01',
      modifiedBy: 'Karlson',
    },
    {
      id: 3,
      name: 'Fociacca-filter',
      folder: 'Breads',
      type: 'Data Element',
      modificationDate: '2020-01-01',
      modifiedBy: 'Klaus',
    },
    {
      id: 4,
      name: 'Velteliner-filter',
      folder: 'Wine',
      type: 'Group',
      modificationDate: '2020-01-01',
      modifiedBy: 'Heimann',
    },
    {
      id: 5,
      name: 'Old-Fashioned-filter',
      folder: 'Cocktails',
      type: 'Hierarchy',
      modificationDate: '2020-01-01',
      modifiedBy: 'FitzPatrik',
    },
    {
      id: 6,
      name: 'Blaufrankisch-filter',
      folder: 'Wine',
      type: 'Data Element',
      modificationDate: '2020-01-01',
      modifiedBy: 'Mr Chalky',
    },
    {
      id: 7,
      name: 'Ravioli-filter',
      folder: 'Pasta',
      type: 'Data Element',
      modificationDate: '2020-01-01',
      modifiedBy: 'Mr Byrde',
    },
    {
      id: 8,
      name: 'Capelletti-filter',
      folder: 'Pasta',
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

  // FOLDER filter
  onFolderSelect(e) {
    this.dataSource.data = this.FILTER_TABLE_DATA;
    let folder: string = e.target.value;
    if (folder !== 'all') {
      this.dataSource.data = this.dataSource.data.filter(
        (filter) => filter.folder === folder
      );
    } else {
      this.dataSource.data = this.FILTER_TABLE_DATA;
    }
  }

  // TYPE filter
  onFilterTypeSelect(e) {
    this.dataSource.data = this.FILTER_TABLE_DATA;
    let type: string = e.target.value;
    if (type !== 'all') {
      this.dataSource.data = this.dataSource.data.filter(
        (filter) => filter.type === type
      );
    } else {
      this.dataSource.data = this.FILTER_TABLE_DATA;
    }
  }

  // NAME filter
  onFilterNameInput(e) {
    this.currentSearchText = e.target.value;
    this.dataSource.data = this.FILTER_TABLE_DATA.filter((record) =>
      record.name.match(new RegExp(this.currentSearchText, 'i'))
    );
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
