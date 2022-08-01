import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../modal/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly apiUrl = 'http://localhost:3000/cadastro';

  constructor( private http: HttpClient ) { }

  // post = metodo http de envio de dados vindo dos inputs
  // data = recebe a class(Cadastro) onde estão os objetos e o tipo desses obejtos, com isso, o metodo sabe quais os obejtos devem ser eviado ao back-end
  // observable = obtendo vários dados em momentos distintos
  // unknown = serve para dizer que os dados são desconhecidos

  postCadastro(data: Cadastro): Observable<unknown>{
    return this.http.post(this.apiUrl, data)
  };

  //<== !!! nos próximos metodos não vou usar o observable !!! ==>

  // get = metodo http de busca de dados armazenados
  // <Cadastro[]> = 
  getAll() {
    return this.http.get<Cadastro[]>(this.apiUrl)
  };

  getOne(id: any){
    return this.http.get<Cadastro[]>(this.apiUrl + id)
  };

  updateCadastro(data: Cadastro, id: Number | undefined){
    return this.http.put<Cadastro[]>(this.apiUrl + id, data)
  };

  deleteCadastro(id: any){
    return this.http.delete<Cadastro[]>(this.apiUrl + id)
  };
}
