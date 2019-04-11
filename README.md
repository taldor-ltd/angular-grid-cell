<h1 align="center">A dynamic grid cell component for Angular</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@taldor-ltd/angular-grid-cell">
    <img src="https://img.shields.io/npm/dt/@taldor-ltd/angular-grid-cell.svg" alt="downloads">
  </a>
  <a href="https://www.npmjs.com/package/@taldor-ltd/angular-grid-cell">
    <img src="https://badge.fury.io/js/%40taldor-ltd%2Fangular-grid-cell.svg" alt="npm version">
  </a>
</p>

### Demo
https://taldor-ltd.github.io/angular-grid-cell/

## Overview

* [Install](README.md#install)
* [Usage](README.md#usage)
* [Options](README.md#options)

## Install

```
npm i @taldor-ltd/angular-grid-cell moment primeicons primeng
```
>Note: moment, primeicons and primeng are dependencies we're using internally in this repository.

## Usage

### Steps to your first simple grid with a two text columns.
>Note: this is just a simple example to get you start with.

### 1. Add `GridCellModule` to your module's `imports`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridCellModule } from '@taldor-ltd/angular-grid-cell';

import { AppComponent } from './app/app.component';

@NgModule({
  imports: [BrowserModule, GridCellModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

### 2. Add `Columns[]` in your component's ts file

```typescript
import { Component, OnInit } from '@angular/core';

import { Column, TextElement } from '@taldor-ltd/angular-grid-cell';

@Component({
  ...
})
export class MyComponent implements OnInit {
  cars = [
    { brand: 'SEAT', model: 'IBIZA' },
    { brand: 'SUBARU', model: 'IMPREZA' }
  ];
  columns: Column[];

  constructor() { }

  ngOnInit() {
    this.columns = [
      new Column(new TextElement('brand'), { header: 'Car''s Brand' }),
      new Column(new TextElement('model'), { header: 'Car''s Model' })
    ];
  }

}
```

### 3. Create a simple html `<table>` and add `<tld-cell>` to it

````html
<table>
  <tr>
    <th *ngFor="let col of columns">
      {{col.header}}
    </th>
  </tr>
  <tr *ngFor="let car of cars">
    <td *ngFor="let col of columns">
      <tld-cell [data]="car" [column]="col"></tld-cell>
    </td>
  </tr>
</table>
````

## Options

### Component `<app-cell>` options

| Property | Type | Required |
| --- | ---- | --- |
| [[data](README.md#data)] | *any[]* | Required |
| [[column](README.md#[column])] | *Column* | Required |

#### [data]

A reference of your data (the entire row's data)

#### [column]

A reference of the cell's column data

### `Column[]` options

This is where the 'magic' is happening. This `Column[]` is basically your entire grid's configuration.

Each `Column` constructor's requires:

1. `Element`/`Element[]` - this is the element/s that will render in each cell of the column
>Note: Having the ability to add multi elements in one cell is clearly one of the biggest advantages of this repository :metal:
check out [Element options](README.md#element-options) for more details

2. `{ header: '' }` - this object is required for the column's header text. this object has more to it, check out [extended Column options](README.md#extended-column-options) for more details

A minimal required config for a simple column looks like this:

````typescript
new Column(new TextElement('fieldName'), { header: 'Some header' })
````

### Extended `Column` options

All of this 'extended' options are optional

| Property | Type | Required |
| --- | ---- | --- |
| [field](README.md#field) | *string \| Function* | Optional |
| [headerClass](README.md#[headerClass]) | *string* | Optional |
| [width](README.md#[width]) | *string* | Optional |
| [align](README.md#[align]) | *ColumnAlign* | Optional |
| [containerClass](README.md#[containerClass]) | *string* | Optional |
| [groupByField](README.md#[groupByField]) | *string* | Optional |
| [columnId](README.md#[columnId]) | *string \| GenerateIdAttr* | Optional |

#### field

#### headerClass

#### width

#### align

#### containerClass

#### groupByField

#### columnId

### `Element` options