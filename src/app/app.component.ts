import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon("Campanas_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/Campanas_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("mail@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/mail@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("sms_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/sms_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("smsRespuesta@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/smsRespuesta@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("llamadas_1@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/llamadas_1@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("push@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/push@PYPGrandes")
    );
    this.matIconRegistry.addSvgIcon("Estatus@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/Estatus@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Covid@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/Covid@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("titulo@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/titulo@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Tipo@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/Tipo@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("usuariosImpactados@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/usuariosImpactados@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("Fecha@PYPGrandes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/Fecha@PYPGrandes.svg")
    );
    this.matIconRegistry.addSvgIcon("perfil_1",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/perfil_1.svg")
    );
    this.matIconRegistry.addSvgIcon("configuracion_1",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/dashboard/configuracion_1.svg")
    );    
  }
}
