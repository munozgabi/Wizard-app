import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./models";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = environment.apiUrl + "usuario/";

  usuario: Usuario;

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: Partial<Usuario>): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      this.http.post<Usuario>(this.url + "cadastrar", usuario).subscribe({
        next: (usuarioCriado) => resolve(usuarioCriado),
        error: (err) => reject(err),
      });
    });
  }

  login(email: string, senha: string): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      this.http.post<Usuario>(this.url + "login/", { email, senha }).subscribe({
        next: (usuario) => resolve(usuario),
        error: (err) => reject(err),
      });
    });
  }
}
