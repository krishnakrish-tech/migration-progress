import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressComponent } from './components/progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true, 
      closeButton: true, 
      progressBar: true, 
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
