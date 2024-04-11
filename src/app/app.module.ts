import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentsService } from './services/agents.service';
import { FormsModule } from '@angular/forms';
import { DetallesAgenteComponent } from './components/detalles-agente/detalles-agente.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MapasComponent } from './components/mapas/mapas.component';
import { MapasDetalleComponent } from './components/mapas-detalle/mapas-detalle.component';
import { ArmasComponent } from './components/armas/armas.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AgentesComponent,
    FooterComponent,
    DetallesAgenteComponent,
    MapasComponent,
    MapasDetalleComponent,
    ArmasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [
    AgentsService,
    provideAnimationsAsync(),
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
