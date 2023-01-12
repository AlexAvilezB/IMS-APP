import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Category } from '../../interfaces/products';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styles: [
  ]
})
export class AddProductsComponent {

  productsForm: FormGroup = new FormGroup(
    {
      'product_name': new FormControl('')
    }
  )

}
