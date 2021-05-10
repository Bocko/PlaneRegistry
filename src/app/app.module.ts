import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { EditNewComponent } from './edit-new/edit-new.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemsListComponent } from './menu-items/menu-items-list/menu-items-list.component';
import { MenuItemsGridComponent } from './menu-items/menu-items-grid/menu-items-grid.component';
import { FormsModule } from '@angular/forms';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EditNewComponent,
    MenuComponent,
    MenuItemsListComponent,
    MenuItemsGridComponent,
    DeleteConfirmComponent,
    ImgViewerComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot
    ([ 
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'menu/new', component: EditNewComponent },
      { path: 'menu/:id/edit', component: EditNewComponent },
      { path: 'menu/:id', component: DetailComponent },
    ]),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
