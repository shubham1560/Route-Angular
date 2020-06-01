import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root',
})

export class ProductResolver implements Resolve<ProductResolved>{ 
    constructor(private productService: ProductService) { };

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> { 
        const id = route.paramMap.get('id');

        return this.productService.getProduct(+id)
            .pipe(
            map(product => ({ product: product })),
            catchError(error => { 
                const message = `Retrieval error: ${error}`;
                return of({ product: null, error: message });
            })
        );

    }
}

