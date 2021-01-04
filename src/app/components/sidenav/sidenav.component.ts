import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  responsiveMenu = false;
  @ViewChild('snav', { static: false }) sidenav: MatSidenav;
  sidenavSmall: boolean = false;

  fillerNav = [
    { label: 'Dashboard', path: '/main/dashboard', icon: 'assets/icons/Dashboard@PYP.png', active: true },
    { label: 'Campañas', path: '/main/information', icon: 'assets/icons/Campanas@PYP.png' },
    { label: 'Pacientes', path: '/main/information', icon: 'assets/icons/Pacientes@PYP.png' },
    { label: 'Programas', path: '/main/information', icon: 'assets/icons/Programas@PYP.svg', class: 'img-svg' },
    { label: 'Monitoreo', path: '/main/information', icon: 'assets/icons/Monitoreo@PYP.png' },
    { label: 'Reportes y Estadisticas', path: '/main/information', icon: 'assets/icons/Estadisticas@PYP.svg', class: 'img-svg' },
  ];

  notifications = [
    {
      icon: "Campanas_1@PYPGrandes",
      number: 3,
      desc: 'Campañas totales'
    },
    {
      icon: "mail@PYPGrandes",
      number: 6,
      desc: 'Correos enviados'
    },
    {
      icon: "sms_1@PYPGrandes",
      number: 8,
      desc: 'SMS enviados'
    },
    {
      icon: "smsRespuesta@PYPGrandes",
      number: 5,
      desc: 'Respuestas SMS'
    },
    {
      icon: "llamadas_1@PYPGrandes",
      number: 3,
      desc: 'Llamadas automáticas'
    },
    {
      icon: "mail@PYPGrandes",
      number: 9,
      desc: 'Notificaciones push'
    },
  ]

  campaigns = [
    {
      title: 'Verificación con todo el equipo',
      status: 'Programada',
      users: Math.floor(100 * Math.random())
    },
    {
      title: 'Verificación con todo el equipo',
      status: 'Completada',
      users: Math.floor(100 * Math.random())
    },
    {
      title: 'Verificación con todo el equipo',
      status: 'Completada',
      users: Math.floor(100 * Math.random())
    },

  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  triggerMenu() {
    console.log("tr");
  }

  sidenavToggle() {
    this.sidenavSmall = !this.sidenavSmall;
  }

}
