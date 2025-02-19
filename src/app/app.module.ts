import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { ProducsService } from './services/producs.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductfbComponent } from './add-productfb/add-productfb.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CardContentComponent } from './card-content/card-content.component';
import { BoldTextDirective } from './directive/bold-text.directive';
import { ObsComponent } from './obs/obs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ContentareaComponent,
    AddProductComponent,
    AddProductfbComponent,
    AddCategoryComponent,
    CardContentComponent,
    BoldTextDirective,
    ObsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ProducsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
