import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../modal/cadastro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formularioCadastro: FormBuilder,
    private service: CadastroService
    ) { }

  ngOnInit(): void {
    this.creatForm(new (Cadastro));
  }

  creatForm(cadastro: Cadastro){
    this.formulario = this.formularioCadastro.group({
          nome:          [cadastro.nome,[Validators.required]],
          sobrenome:     [cadastro.sobrenome,[Validators.required]],
          cpf:           [cadastro.cpf,[Validators.required]],
          email:         [cadastro.email,[Validators.email]],
          telefone:      [cadastro.telefone,[Validators.required]],
          senha:         [cadastro.senha,[Validators.required]],
          confirmaSenha: [cadastro.confirmaSenha,[Validators.required]]
        });
    this.formulario.reset(new Cadastro());
  }

  onSubmit(){
    console.log(this.formulario.value);
  }
  cadastar(){
    return this.service.postCadastro(this.formulario.value).subscribe({
      next: (res) => {
        alert("Cadastrado com sucesso !!! :)");
        this.formulario.reset();
      },
      error: (res) =>{
        alert("Erro ao cadastrar !!! :(")
      }
    })
  }

}
