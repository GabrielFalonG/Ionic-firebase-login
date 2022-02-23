import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import { take } from 'rxjs/operators';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  @Input() product: Product;
  form: FormGroup;

  constructor(
    private productService: ProductService,
    private loading: LoadingController,
    private modal: ModalController
    ) { }

  ngOnInit() {
    this.initAddProductForm();
  }

  initAddProductForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      photo: new FormControl(null),
    })
  }

  closeModal() {
      this.modal.dismiss();
  }

  async submitProduct( ) {
      const loading = await this.loading.create({message: 'Loading...'});
      loading.present();

      this.productService.addProduct(this.form.value)
                                    .pipe(take(1))
                                    .subscribe(product =>{
                                      console.log(product)
                                      this.form.reset();
                                      loading.dismiss();
                                    });
  }


}
