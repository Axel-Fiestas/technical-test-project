import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import User from "../shared/interfaces/User";

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  private users:User[]=[
    { "id": 1, "email": "luca@gmail.com", "password": "lucas123","name":"Lucas Hernandez","imageUrl": "https://img.freepik.com/foto-gratis/atractivo-hombre-pelo-oscuro-trabajando-mesa-oficina-viste-camisa-azul-chaqueta-negra-tomando-taza-cafe-sonriendo-camara_197531-516.jpg"},
    { "id": 2, "email": "lilly@gmail.com", "password": "lilly123", "name": "Lilly", "imageUrl": "https://cdn.euroinnova.edu.es/img/subidasEditor/68-1612188238.webp"},
    { "id": 3, "email": "anna@gmail.com", "password": "anna123", "name": "Anna", "imageUrl": "https://cdn.euroinnova.edu.es/img/subidasEditor/68-1612188238.webp"},
    { "id": 4, "email": "john@gmail.com", "password": "john123", "name": "John", "imageUrl": "https://img.freepik.com/foto-gratis/atractivo-hombre-pelo-oscuro-trabajando-mesa-oficina-viste-camisa-azul-chaqueta-negra-tomando-taza-cafe-sonriendo-camara_197531-516.jpg"},
    { "id": 5, "email": "mary@gmail.com", "password": "mary123", "name": "Mary", "imageUrl": "https://cdn.euroinnova.edu.es/img/subidasEditor/68-1612188238.webp"}
  ]

  constructor() { }

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();


  authenticate(email: string | undefined, password: string | undefined): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.currentUserSubject.next(user);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

}
