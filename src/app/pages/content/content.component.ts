import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover: string =
    'https://imgs.search.brave.com/NuyEkxuhQlNBJAFChs6n9HPpqBJm7d1YDA40TWa0ROw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aHlw/aXguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA1L1Nv/bW1lcmxhbmRzY2hh/ZnQtQmlsZGVyLTMw/LmpwZw';
  title: string = 'Minha noticia';
  description: string = 'olá mundo';
}
