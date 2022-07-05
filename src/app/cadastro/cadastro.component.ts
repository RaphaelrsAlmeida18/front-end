import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formularioCadastro: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm(new (Cadastro));
  }

  creatForm(cadastro: Cadastro){
    this.formulario = this.formularioCadastro.group({
          nome:       [cadastro.nome,[Validators.required]],
          sobrenome:  [cadastro.sobrenome,[Validators.required]],
          cpf:        [cadastro.cpf,[Validators.required]],
          email:      [cadastro.email,[Validators.required]],
          telefone:   [cadastro.telefone,[Validators.required]],
        });
  }

  onSubmit(){
    console.log(this.formulario.value);
    this.formulario.reset(new Cadastro());
  }

}
