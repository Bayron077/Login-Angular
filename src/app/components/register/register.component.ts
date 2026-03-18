import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
    imports: [FormsModule],  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  register(){

  }

  goToHome(){
    this.router.navigate(['/']);
}
}
    


