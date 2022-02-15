import { Component } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-links';

  links = [
    {
      name: 'Github',
      url: 'https://github.com/j-renan',
      imgSrc: '/assets/img/github.png',
      nome: 'GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joão-renan-celso-52495a194',
      imgSrc: '/assets/img/linkedin.png',
      nome: 'LinkedIn'
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5519988101852&text=Ol%C3%A1!',
      imgSrc: '/assets/img/whatsapp.png',
      nome: 'WhatsApp'
    }
  ]

  constructor(
  ) {}


  ngOnInit() {
    particlesJS.load('particles-js', '../assets/particles.json', null);
  }

  toUrl(url: string) {
    window.open(url, '_blank');
  }
}
