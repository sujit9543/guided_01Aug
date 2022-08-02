import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProListComponent } from './components/pro-list/pro-list.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { ProFormComponent } from './components/pro-form/pro-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MerchentListComponent } from './components/merchent-list/merchent-list.component';
import { BuyerListComponent } from './components/buyer-list/buyer-list.component';

const route : Routes = [
  {path: 'merchent',component:MerchentListComponent},
  {path: 'buyer',component:BuyerListComponent},
  {path: '',component:WelcomeComponent},
  {path: 'products',component:ProListComponent},
  {path: 'categories',component:CatListComponent},
  {path: 'productform',component:ProFormComponent},
  {path: 'categoryform',component:CatFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProListComponent,
    CatListComponent,
    CatFormComponent,
    ProFormComponent,
    WelcomeComponent,
    ProFormComponent,
    CatFormComponent,
    ProFormComponent,
    CatFormComponent,
    MerchentListComponent,
    BuyerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



