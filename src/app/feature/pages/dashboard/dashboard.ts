import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-dashboard',
  imports: [DecimalPipe ,CurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
    private productService = inject(ProductService)

  totalProducts = computed(() => this.productService.products().length);

  inStock = computed(() => this.productService.products().filter(p => p.inStock).length);

  avgPrice = computed(() => {
    const list = this.productService.products();
    if (!list.length) return 0;
    return list.reduce((sum, p) => sum + p.price, 0) / list.length;
  });

  recentProducts = computed(() => {
    return [...this.productService.products()]
      .sort((a,b) => (new Date(b.addedAt!).getTime()) - (new Date(a.addedAt!).getTime()))
      .slice(0, 6);
  });

}
