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
import { PopupComponent } from './common/popup/popup.component';
import { PublishListComponent } from './publish/publish-list/publish-list.component';
import { PublishDetailComponent } from './publish/publish-detail/publish-detail.component';
import { ReadClassificationListComponent } from './reader-classification/reader-classification-list/reader-classification-list.component';
import { ReaderClassificationDetailComponent } from './reader-classification/reader-classification-detail/reader-classification-detail.component';
import { StorePositionListComponent } from './store/store-position-list/store-position-list.component';
import { StorePositionDetailComponent } from './store/store-position-detail/store-position-detail.component';
import { RentLevelListComponent } from './rent/rent-level-list/rent-level-list.component';
import { RentLevelDetailComponent } from './rent/rent-level-detail/rent-level-detail.component';
import { ApplicationCardPayComponent } from './application/application-card-pay/application-card-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ListboxComponent,
    HeadlineComponent,
    BookDetailComponent,
    ReaderListComponent,
    ReaderDetailComponent,
    PopupComponent,
    PublishListComponent,
    PublishDetailComponent,
    ReadClassificationListComponent,
    ReaderClassificationDetailComponent,
    StorePositionListComponent,
    StorePositionDetailComponent,
    RentLevelListComponent,
    RentLevelDetailComponent,
    ApplicationCardPayComponent
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
      { path: 'publish-list', component: PublishListComponent },
      { path: 'publish-detail', component: PublishDetailComponent },
      { path: 'reader-classification-list', component: ReadClassificationListComponent },
      { path: 'reader-classification-detail', component: ReaderClassificationDetailComponent },
      { path: 'store-position-list', component: StorePositionListComponent },
      { path: 'store-position-detail', component: StorePositionDetailComponent },
      { path: 'rent-level-list', component: RentLevelDetailComponent },
      { path: 'rent-level-detail', component: RentLevelListComponent },
      { path: 'application-card-pay', component: ApplicationCardPayComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
