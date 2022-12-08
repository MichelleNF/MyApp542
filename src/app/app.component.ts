import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Oosapat', url: '/home', icon: 'clipboard' },
    { title: 'Ooselite', url: '/home1', icon: 'clipboard' },
    { title: 'Sat', url: '/home2', icon: 'clipboard' },
  ];
  public labels = ['Preguntas frecuentes','Soporte tecnico','Ayuda'];
  constructor() {}
}
