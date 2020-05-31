import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
        ])
    ],
    exports: [
        RouterModule,
    ]
})

export class ProductRoutingModule{ }