import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorTextComponent } from './branding-modal/generator-text.component';
import { BrandingModalComponent } from './branding-modal/branding-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BrandingModalComponent,
    GeneratorTextComponent
  ],
  exports: [
    BrandingModalComponent,
    GeneratorTextComponent
  ],
  entryComponents: [
    BrandingModalComponent,
    GeneratorTextComponent
  ]
})
export class RenderModalsModule { }
