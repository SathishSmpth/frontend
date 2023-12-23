import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { CoreRoutingModule } from './core-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  bootstrap: [RootComponent],
})
export class CoreModule {}
