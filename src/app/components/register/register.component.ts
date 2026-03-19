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
        // Validación básica
    if (this.email === '' || this.password === ''|| this.nombre === '' || this.apellido === '' ) {
      this.mensaje = 'Por favor completá todos los campos.';
      return;
    }

    // Credenciales de prueba (hardcodeadas para aprender)
    if (this.email === 'admin@mail.com' && this.password === '1234') {
      this.mensaje = 'Registro exitoso! Bienvenido.';
    }
  }

  goToHome(){
    this.router.navigate(['/']);
}
}
    


