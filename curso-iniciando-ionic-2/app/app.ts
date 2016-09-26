import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ConnectionService } from './providers/connection-service/connection-service';

import { HomePage } from './pages/home/home';
import { MenuTestPage } from './pages/menu-test/menu-test';
import { GeneratedTestPage } from './pages/generated-test/generated-test';
import { AlertPage } from './pages/alert/alert';
import { ButtonTestPage } from './pages/button-test/button-test';
import { CardTestPage } from './pages/card-test/card-test';
import { IconTestPage } from './pages/icon-test/icon-test';
import { InputTestPage } from './pages/input-test/input-test';
import { ListTestPage } from './pages/list-test/list-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(public platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      {
        component: HomePage, title: 'Home', icon: 'home'
      },
      {
        component: MenuTestPage, title: 'Menu Test', icon: 'menu'
      },
      {
        component: GeneratedTestPage, title: 'Genererated Page', icon: 'home'
      },
      {
        component: AlertPage, title: 'Alert Page', icon: 'home'
      },
      {
        component: ButtonTestPage, title: 'Button Page', icon: ''
      },
      {
        component: CardTestPage, title: 'Card Page', icon: ''
      },
      {
        component: IconTestPage, title: 'Icon Page', icon: ''
      },
      {
        component: InputTestPage, title: 'Input Page', icon: ''
      },
      {
        component: ListTestPage, title: 'List Page', icon: ''
      }
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }

}

ionicBootstrap(MyApp, [ConnectionService], {
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay',
    }
  }
});
