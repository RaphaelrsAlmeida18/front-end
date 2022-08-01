import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../service/cadastro.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(
    private service: CadastroService
  ) { }

  ngOnInit(): void {
  }

}
