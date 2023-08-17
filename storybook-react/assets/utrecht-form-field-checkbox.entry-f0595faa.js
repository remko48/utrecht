import{r as u,k as r,j as e}from"./index.esm-743face4.js";import{c as o}from"./clsx.m-9f200cc0-1229b3e0.js";import"./defineProperty-a128c648.js";import"./getPrototypeOf-5b183829.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./iframe-453f460c.js";import"../sb-preview/runtime.mjs";const h=`.utrecht-form-field{font-family:var(--utrecht-document-font-family, inherit);margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-form-field-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-form-field-margin-block-start, 0));max-inline-size:var(--utrecht-form-field-max-inline-size);page-break-inside:avoid}.utrecht-form-field--distanced{--utrecht-space-around:1}.utrecht-form-field--invalid{border-inline-start-color:var(--utrecht-form-field-invalid-border-inline-start-color);border-inline-start-style:solid;border-inline-start-width:var(--utrecht-form-field-invalid-border-inline-start-width);padding-inline-start:var(--utrecht-form-field-invalid-padding-inline-start)}.utrecht-form-field--checkbox{display:grid;gap:0 var(--utrecht-checkbox-margin-inline-end, 12px);grid-template-areas:"input label" "input description" "input description-invalid";grid-template-columns:var(--utrecht-checkbox-size) 100fr;}.utrecht-form-field--checkbox .utrecht-form-field__label:has(.utrecht-form-field__input){margin-inline-start:calc(-1 * (var(--utrecht-checkbox-size) + var(--utrecht-checkbox-margin-inline-end, 12px)))}.utrecht-form-field--checkbox .utrecht-form-field__label .utrecht-form-field__input{margin-inline-end:var(--utrecht-checkbox-margin-inline-end, 12px)}.utrecht-form-field--radio{display:grid;gap:0 var(--utrecht-radio-button-margin-inline-end, 12px);grid-template-areas:"input label" "input description" "input description-invalid";grid-template-columns:var(--utrecht-radio-button-size) 100fr;}.utrecht-form-field--radio .utrecht-form-field__label:has(.utrecht-form-field__input){margin-inline-start:calc(-1 * (var(--utrecht-radio-button-size) + var(--utrecht-radio-button-margin-inline-end, 12px)))}.utrecht-form-field--radio .utrecht-form-field__label .utrecht-form-field__input{margin-inline-end:var(--utrecht-radio-button-margin-inline-end, 12px)}.utrecht-form-field__input{grid-area:input;order:5}.utrecht-form-field__label{grid-area:label;margin-block-end:var(--utrecht-form-field-label-margin-block-end);margin-block-start:0;order:1}.utrecht-form-field .utrecht-form-field-description{grid-area:description;margin-block-end:var(--utrecht-form-field-description-margin-block-end);margin-block-start:var(--utrecht-form-field-description-margin-block-start);order:2}.utrecht-form-field .utrecht-form-field-description--invalid{grid-area:description-invalid;order:3}.utrecht-form-field__description{grid-area:description;margin-block-end:var(--utrecht-form-field-description-margin-block-end);margin-block-start:var(--utrecht-form-field-description-margin-block-start);order:2}.utrecht-form-field__description--before{grid-area:description-before;order:4}.utrecht-form-label{color:var(--utrecht-form-label-color);font-size:var(--utrecht-form-label-font-size);font-weight:var(--utrecht-form-label-font-weight)}.utrecht-form-label--checkbox{color:var(--utrecht-form-label-checkbox-color, var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor, revert);font-weight:var(--utrecht-form-label-checkbox-font-weight, var(--utrecht-form-label-font-weight))}.utrecht-form-label--checked{font-weight:var(--utrecht-form-label-checked-font-weight, var(--utrecht-form-label-font-weight))}.utrecht-form-label--disabled{cursor:var(--utrecht-action-disabled-cursor, revert);font-weight:var(--utrecht-form-label-disabled-color, var(--utrecht-form-label-color))}.utrecht-form-label--radio{color:var(--utrecht-form-label-checkbox-color, var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor, revert);font-weight:var(--utrecht-form-label-radio-font-weight, var(--utrecht-form-label-font-weight))}.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}`,d=class{constructor(i){u(this,i),this.utrechtBlur=r(this,"utrechtBlur",7),this.utrechtChange=r(this,"utrechtChange",7),this.utrechtFocus=r(this,"utrechtFocus",7),this.utrechtInput=r(this,"utrechtInput",7),this.label=!1,this.disabled=!1,this.checked=!1,this.invalid=!1,this.required=!1,this.value=""}render(){const{checked:i,disabled:c,invalid:a,required:l,value:n}=this;return e("div",{class:"utrecht-form-field utrecht-form-field--checkbox"},e("input",{id:"input",class:o("utrecht-checkbox"),type:"checkbox",checked:i,disabled:c,"aria-invalid":a?"true":null,required:l,value:n,onBlur:t=>this.utrechtBlur.emit(t),onChange:t=>this.utrechtChange.emit(t),onFocus:t=>this.utrechtFocus.emit(t),onInput:t=>{this.checked=t.target.checked,this.utrechtInput.emit(t)}}),e("label",{class:o("utrecht-form-field__label","utrecht-form-field__label--checkbox","utrecht-form-label","utrecht-form-label--checkbox"),htmlFor:"input"},e("slot",null)))}};d.style=h;export{d as utrecht_form_field_checkbox};
//# sourceMappingURL=utrecht-form-field-checkbox.entry-f0595faa.js.map
