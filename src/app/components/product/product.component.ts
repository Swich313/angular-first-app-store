import {Component, Input} from "@angular/core";
import {IProduct} from "../../data/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input()
  product: IProduct

  details = false
}
