import { dataFake } from './../../data/data-fake';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://imgs.search.brave.com/NuyEkxuhQlNBJAFChs6n9HPpqBJm7d1YDA40TWa0ROw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aHlw/aXguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA1L1Nv/bW1lcmxhbmRzY2hh/ZnQtQmlsZGVyLTMw/LmpwZw';
  title: string = 'Minha noticia';
  description: string = 'olá mundo';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const [{ description, photo, title }] = dataFake.filter(
      (dataFake) => dataFake.id === id
    );
    this.photoCover= photo;
    this.title = title;
    this.description = description;
  }
}
