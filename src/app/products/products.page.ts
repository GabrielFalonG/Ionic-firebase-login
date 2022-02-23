import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from './product.model';
import { tap } from 'rxjs/operators';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService, 
    private loading: LoadingController,
    private modal: ModalController) { }

  async ngOnInit() {
      const loading = await this.loading.create({message: 'Loading...'});
      loading.present();

      this.products$ = this.productService.getProducts().pipe(
        tap(products => {
          loading.dismiss();
          return products;
        })
      )
  }

  async openDetailModal(product: Product) {
      const modal = await this.modal.create({
        component: DetailComponent,
        componentProps: {product},
      });

      modal.present();
  }

}
