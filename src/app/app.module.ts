import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [ // on declare les composants qu'on aura a creer : exple: header, main, aside etc
    AppComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [ // modules pour le fonctionnement de notre app
    BrowserModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { } // on l'export pour q'il soit disponible pour d'autres modules...
