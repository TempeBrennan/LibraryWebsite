import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { ListboxComponent } from './common/listbox/listbox.component';
import { HeadlineComponent } from './common/headline/headline.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { ReaderListComponent } from './reader/reader-list/reader-list.component';
import { ReaderDetailComponent } from './reader/reader-detail/reader-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ListboxComponent,
    HeadlineComponent,
    BookDetailComponent,
    ReaderListComponent,
    ReaderDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BookListComponent, pathMatch: 'full' },
      { path: 'book-list', component: BookListComponent },
      { path: 'book-detail', component: BookDetailComponent },
      { path: 'reader-list', component: ReaderListComponent },
      { path: 'reader-detail', component: ReaderDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
