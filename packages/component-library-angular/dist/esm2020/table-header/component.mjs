import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class UtrechtTableHeaderAttr {
    constructor() { }
}
UtrechtTableHeaderAttr.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: UtrechtTableHeaderAttr, deps: [], target: i0.ɵɵFactoryTarget.Component });
UtrechtTableHeaderAttr.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.0", type: UtrechtTableHeaderAttr, selector: "[utrecht-table-header]", host: { attributes: { "role": "table-row-group" }, properties: { "class.utrecht-table__header": "true" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: ["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */.utrecht-table{border-collapse:collapse;border-color:var(--utrecht-table-border-color, 0);border-style:solid;border-width:var(--utrecht-table-border-width, 0);font-family:var(--utrecht-table-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-table-font-size, inherit);width:100%}.utrecht-table--distanced{margin-block-end:var(--utrecht-table-margin-block-end);margin-block-start:var(--utrecht-table-margin-block-start)}.utrecht-table__caption{color:var(--utrecht-table-caption-color);font-family:var(--utrecht-table-caption-font-family);font-size:var(--utrecht-table-caption-font-size);font-weight:var(--utrecht-table-caption-font-weight);line-height:var(--utrecht-table-caption-line-height);margin-block-end:var(--utrecht-table-caption-margin-block-end);text-align:var(--utrecht-table-caption-text-align, center)}.utrecht-table__header{background-color:var(--utrecht-table-header-background-color);color:var(--utrecht-table-header-color);font-weight:var(--utrecht-table-header-font-weight);text-transform:var(--utrecht-table-header-text-transform);vertical-align:bottom}.utrecht-table__cell--last-header-row{border-block-end-color:var(--utrecht-table-header-border-block-end-color, transparent);border-block-end-style:solid;border-block-end-width:var(--utrecht-table-header-border-block-end-width, 0)}.utrecht-table__body{vertical-align:baseline}.utrecht-table__header-cell{color:var(--utrecht-table-header-cell-color);font-size:var(--utrecht-table-header-cell-font-size);font-weight:var(--utrecht-table-header-cell-font-weight);text-align:start;text-transform:var(--utrecht-table-header-cell-text-transform)}.utrecht-table__cell{border-block-end-color:var(--utrecht-table-row-border-block-end-color, transparent);border-block-end-style:solid;border-block-end-width:var(--utrecht-table-row-border-block-end-width, 0);line-height:var(--utrecht-table-cell-line-height, inherit);padding-block-end:var(--utrecht-table-cell-padding-block-end, 0);padding-block-start:var(--utrecht-table-cell-padding-block-start, 0);padding-inline-end:var(--utrecht-table-cell-padding-inline-end, 0);padding-inline-start:var(--utrecht-table-cell-padding-inline-start, 0);text-align:start}.utrecht-table__cell--first{padding-inline-start:var(--utrecht-table-row-padding-inline-start, var(--utrecht-table-cell-padding-inline-start, 0))}.utrecht-table__cell--last{padding-inline-end:var(--utrecht-table-row-padding-inline-end, var(--utrecht-table-cell-padding-inline-end, 0))}.utrecht-table__header-cell--numeric-column,.utrecht-table__cell--numeric-column{text-align:right}.utrecht-table__cell--numeric-data{font-feature-settings:lining-nums tabular-nums;font-variant-numeric:lining-nums tabular-nums}.utrecht-table__row--alternate-odd{background-color:var(--utrecht-table-row-alternate-odd-background-color);color:var(--utrecht-table-row-alternate-odd-color)}.utrecht-table__row--alternate-even{background-color:var(--utrecht-table-row-alternate-even-background-color);color:var(--utrecht-table-row-alternate-even-color)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: UtrechtTableHeaderAttr, decorators: [{
            type: Component,
            args: [{ selector: '[utrecht-table-header]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.utrecht-table__header]': 'true',
                        role: 'table-row-group',
                    }, template: "<ng-content></ng-content>\n", styles: ["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n */.utrecht-table{border-collapse:collapse;border-color:var(--utrecht-table-border-color, 0);border-style:solid;border-width:var(--utrecht-table-border-width, 0);font-family:var(--utrecht-table-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-table-font-size, inherit);width:100%}.utrecht-table--distanced{margin-block-end:var(--utrecht-table-margin-block-end);margin-block-start:var(--utrecht-table-margin-block-start)}.utrecht-table__caption{color:var(--utrecht-table-caption-color);font-family:var(--utrecht-table-caption-font-family);font-size:var(--utrecht-table-caption-font-size);font-weight:var(--utrecht-table-caption-font-weight);line-height:var(--utrecht-table-caption-line-height);margin-block-end:var(--utrecht-table-caption-margin-block-end);text-align:var(--utrecht-table-caption-text-align, center)}.utrecht-table__header{background-color:var(--utrecht-table-header-background-color);color:var(--utrecht-table-header-color);font-weight:var(--utrecht-table-header-font-weight);text-transform:var(--utrecht-table-header-text-transform);vertical-align:bottom}.utrecht-table__cell--last-header-row{border-block-end-color:var(--utrecht-table-header-border-block-end-color, transparent);border-block-end-style:solid;border-block-end-width:var(--utrecht-table-header-border-block-end-width, 0)}.utrecht-table__body{vertical-align:baseline}.utrecht-table__header-cell{color:var(--utrecht-table-header-cell-color);font-size:var(--utrecht-table-header-cell-font-size);font-weight:var(--utrecht-table-header-cell-font-weight);text-align:start;text-transform:var(--utrecht-table-header-cell-text-transform)}.utrecht-table__cell{border-block-end-color:var(--utrecht-table-row-border-block-end-color, transparent);border-block-end-style:solid;border-block-end-width:var(--utrecht-table-row-border-block-end-width, 0);line-height:var(--utrecht-table-cell-line-height, inherit);padding-block-end:var(--utrecht-table-cell-padding-block-end, 0);padding-block-start:var(--utrecht-table-cell-padding-block-start, 0);padding-inline-end:var(--utrecht-table-cell-padding-inline-end, 0);padding-inline-start:var(--utrecht-table-cell-padding-inline-start, 0);text-align:start}.utrecht-table__cell--first{padding-inline-start:var(--utrecht-table-row-padding-inline-start, var(--utrecht-table-cell-padding-inline-start, 0))}.utrecht-table__cell--last{padding-inline-end:var(--utrecht-table-row-padding-inline-end, var(--utrecht-table-cell-padding-inline-end, 0))}.utrecht-table__header-cell--numeric-column,.utrecht-table__cell--numeric-column{text-align:right}.utrecht-table__cell--numeric-data{font-feature-settings:lining-nums tabular-nums;font-variant-numeric:lining-nums tabular-nums}.utrecht-table__row--alternate-odd{background-color:var(--utrecht-table-row-alternate-odd-background-color);color:var(--utrecht-table-row-alternate-odd-color)}.utrecht-table__row--alternate-even{background-color:var(--utrecht-table-row-alternate-even-background-color);color:var(--utrecht-table-row-alternate-even-color)}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlLWhlYWRlci9jb21wb25lbnQudHMiLCIuLi8uLi8uLi9zcmMvdGFibGUtaGVhZGVyL2luZGV4Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhdEYsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxnQkFBZSxDQUFDOzttSEFETCxzQkFBc0I7dUdBQXRCLHNCQUFzQiwwS0NibkMsNkJBQ0E7MkZEWWEsc0JBQXNCO2tCQVhsQyxTQUFTOytCQUNFLHdCQUF3QixtQkFHakIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDSiwrQkFBK0IsRUFBRSxNQUFNO3dCQUN2QyxJQUFJLEVBQUUsaUJBQWlCO3FCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t1dHJlY2h0LXRhYmxlLWhlYWRlcl0nLFxuICB0ZW1wbGF0ZVVybDogJ2luZGV4Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5kZXguc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudXRyZWNodC10YWJsZV9faGVhZGVyXSc6ICd0cnVlJyxcbiAgICByb2xlOiAndGFibGUtcm93LWdyb3VwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVXRyZWNodFRhYmxlSGVhZGVyQXR0ciB7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==