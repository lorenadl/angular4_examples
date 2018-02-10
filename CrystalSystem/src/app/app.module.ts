import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { LoginComponent } from './system/login/login.component';
import { CustomersComponent } from './customers/customers.component';
// import { NotFoundComponent } from './system/not-found/not-found.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerRetrieveComponent } from './customers/customer-retrieve/customer-retrieve.component';
import {CustomersService} from "./customers/customers.service";
import {HttpClientModule} from "@angular/common/http";
import { CustomerTeaserComponent } from './customers/customer-teaser/customer-teaser.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import {BulmaModule} from "./bulma/bulma.module";
import {SystemModule} from "./system/system.module";
import {AuthFakeService} from "./shared/auth-fake.service";
import {AuthGuard} from "./shared/auth.guard";
// import {ErrorComponent} from "./system/error/error.component";
import {CustomerListResolve} from "./customers/customer-list/customer-list.resolve";
import {AppRoutingModule} from "./app-routing.module";
import {CustomerRetrieveResolve} from "./customers/customer-retrieve/customer-retrieve.resolve";
import {ReactiveFormsModule} from "@angular/forms";

/*
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'customers',
    component: CustomersComponent,
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      //{ path: 'all', component: CustomerListComponent}
      { path: '', component: CustomerListComponent, resolve: { customers: CustomerListResolve}},
      { path: 'add', component: CustomerCreateComponent},
      { path: '', component: CustomerCreateComponent},
      { path: ':cid/view', component: CustomerRetrieveComponent},
    ]
  },
  {
    path: '404',
    //component: NotFoundComponent
    component: ErrorComponent,
    data: {
      message: 'Page not found'
    }
  },
  {
    path: '403',
    //component: NotFoundComponent
    component: ErrorComponent,
    data: {
      message: 'Access Denied'
    }
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerCreateComponent,
    CustomerRetrieveComponent,
    CustomerTeaserComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(routes),
    BulmaModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SystemModule
  ],
  providers: [
    CustomersService,
    AuthFakeService,
    AuthGuard,
    CustomerListResolve,
    CustomerRetrieveResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
