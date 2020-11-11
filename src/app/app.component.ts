import { Component } from '@angular/core';
import { Product } from 'src/models/product';
import { Promo } from 'src/models/promo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[] = [
    {
      id: 'hamburguesa-de-queso',
      title: 'Hamburguesa con Queso',
      details: 'Un delicioso clásico con una rodaja de queso derretido.',
      price: '710',
      src: '../../assets/images/hamburguesa-de-queso.png',
      srcSlider: '../../assets/images/hamburguesa-de-queso-slider.jpg'
    },
    {
      id: 'hamburguesa-de-pollo',
      title: 'Hamburguesa de Pollo',
      details: 'Mayonesa, cebolla morada, lechuga entera, tomate y pollo crispy.',
      price: '2,590',
      src: '../../assets/images/hamburguesa-de-pollo.png',
      srcSlider: '../../assets/images/hamburguesa-de-pollo-slider.jpg'
    },
    {
      id: 'papas',
      title: 'Papas',
      details: 'Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.',
      price: '1,060',
      src: '../../assets/images/papas.png',
      srcSlider: '../../assets/images/papas-slider.jpg'
    },
    {
      id: 'bebida',
      title: 'Bebida',
      details: '-',
      price: '710',
      src: '../../assets/images/bebida.png',
      srcSlider: '../../assets/images/bebida-slider.jpg',
    },
  ];

  promos: Promo[] = [
    {
      title: 'WcCOMBO',
      price: '2,000',
      src: '../../assets/images/promocion.png',
    }
  ]
}
