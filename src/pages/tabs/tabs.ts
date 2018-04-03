import { Component } from '@angular/core';

import { AboutPage } from '../marketQuotations/about';
import { ContactPage } from '../information/contact';
import { HomePage } from '../home/home';
import { Trade } from "../trade/trade";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  zxgRoot = HomePage;
  hqRoot = AboutPage;
  zxRoot = ContactPage;
  jyRoot = Trade;

  constructor() {

  }
}
