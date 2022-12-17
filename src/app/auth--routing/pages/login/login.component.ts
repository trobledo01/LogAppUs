import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioLog: FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(8)]],
    pass: ['', [Validators.required, Validators.minLength(7)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private toastr: ToastrService) {

  }

  login() {
    /*console.log(this.formularioLog.value);
    console.log(this.formularioLog.valid);
    this.router.navigateByUrl('/dashboard')*/

    if (this.formularioLog.valid) {
      const { id, pass } = this.formularioLog.valid;
      this.authService.login(id, pass).subscribe(res => {
        if(res == true){
          this.router.navigateByUrl('/dashboard');
          this.toastr.success(id, 'Ingreso Correcto')
        }else {
          console.log(res);
          this.toastr.error('Verifique sus datos', 'Error',{
            timeOut: 4000,
            progressAnimation: 'increasing'
          })

        }

      })

    } else {
      this.toastr.error('Verifique sus datos', 'Error')

    }
  }

}
