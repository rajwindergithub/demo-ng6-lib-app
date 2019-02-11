import { NgModule } from '@angular/core';
import { DemoNg6LibComponent } from './demo-ng6-lib.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [DemoNg6LibComponent, Comp1Component],
  imports: [
  ],
  exports: [DemoNg6LibComponent, Comp1Component]
})
export class DemoNg6LibModule { }
