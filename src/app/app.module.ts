import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatListModule, MatInputModule, MatButtonModule,
  MatFormFieldModule, MatIconModule, MatChipsModule, MatTooltipModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
