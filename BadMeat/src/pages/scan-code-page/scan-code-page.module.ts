import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanCodePage } from './scan-code-page';

@NgModule({
  declarations: [
    ScanCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ScanCodePage),
  ],
  exports: [
    ScanCodePage
  ]
})
export class ScanCodePageModule {}
