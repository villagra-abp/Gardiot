import { Component, OnInit, HostListener, Renderer } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../../../services/user.service';
import { User } from '../../../classes/user.class';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService } from 'ng2-img-max';
import 'rxjs/add/operator/delay';
declare var $: any;

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public user = new User("");
  public countries: any[] = [];
  public cities: any[] = [];
  public zip: string = "";
  public countryData: Observable<Array<Select2OptionData>>;
  public startCountry: Observable<string>;
  public cityData: Observable<Array<Select2OptionData>>;
  public startCity: Observable<string>;
  public uploader: FileUploader;
  public oldId: String;
  public users: any[] = [];

  constructor(
    public _editUserService: UserService,
    public _appComponent: AppComponent,
    public _router: ActivatedRoute,
    public datePipe: DatePipe,
    public _route: Router) { }

  guardarUsuario(forma: NgForm) {
    if (forma.value.admin == true) {
      forma.value.admin = 1;
    }
    this._editUserService.modifyUserProfileAdmin(forma.value, this.oldId, this.user)
      .subscribe(data => {
        this._appComponent.mensajeEmergente(data.Mensaje, "primary", "/admin/users?pag=1");
      })
  }

  getID() {
    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.user = new User(params['id']);
        this.oldId = this.user.id;
        this.mostrar(this.user);
      } else {
        this._route.navigate(['/plants']);
      }
    });
  }

  mostrar(User: User) {
    this._editUserService.detailsByUser(User)
      .subscribe(data => {
        this.user.id = data[0].id;
        this.user.name = data[0].name;
        this.user.lastName = data[0].lastName;
        this.user.active = data[0].active;
        this.user.admin = data[0].admin;
        this.user.city = data[0].city;
        this.user.countryCode = data[0].countryCode;
        this.user.birthDate = this.datePipe.transform(data[0].birthDate, 'yyyy-MM-dd');
        this.listarPaises();
        this.mostrarCiudad();
      },
        error => {
          console.error(error);
          localStorage.clear();
          sessionStorage.clear();
        });
  }
  listarPaises() {
    this._editUserService.listCoutries()
      .subscribe(data => {
        let aux = [];
        aux.push({ id: 0, text: "Selecciona un país" });
        for (let i = 0; i < data.geonames.length; i++) {
          aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
        }
        this.countryData = Observable.create((obs) => {
          obs.next(aux);
          obs.complete();
        });
        this.startCountry = Observable.create((obs) => {
          obs.next(this.user.countryCode);
          obs.complete();
        }).delay(1000);
      },
        error => {
          //console.log(error);
        });
  }

  mostrarCiudad() {
    let aux = [];
    aux.push({ id: this.user.city, text: this.user.city });
    this.cityData = Observable.create((obs) => {
      obs.next(aux);
      obs.complete();
    });
    document.querySelector('#ciudad').innerHTML = this.user.city;
  }
  //Estas dos funciones son para guardar los datos
  //del país y ciudad en el objeto de usuario
  saveCountry(e) {
    //console.log(e.value);
    if (e.value != 0 && e.value !== undefined) {
      this.user.countryCode = e.value;
    }
  }
  saveCity(e) {
    if (e.value != 0 && e.value !== undefined) {
      this.user.city = e.value;
      this.mostrarCiudad();
    }
  }

  @HostListener('document:keyup', ['$event'])
  searchZip(event: KeyboardEvent): void {
    //aqui vamos cargando las posibles ciudades a elegir
    let input = (<HTMLInputElement>document.querySelector("#zipCode"));
    if (input.value.length == 5) {
      this._editUserService.listCitiesByZip(this.user.countryCode, input.value)
        .subscribe(data => {
          let sp = document.querySelector('#ciudad');
          if (data.length > 0) {
            if (data[0].adminName3 !== undefined) {
              this.user.city = data[0].adminName3;
              sp.innerHTML = data[0].adminName3;
            }
            else if (data[0].adminName2 !== undefined) {
              this.user.city = data[0].adminName2;
              sp.innerHTML = data[0].adminName2;
            }
            else if (data[0].adminName1 !== undefined) {
              this.user.city = data[0].adminName1;
              sp.innerHTML = data[0].adminName1;
            }
            else {
              this.user.city = '';
              sp.innerHTML = 'Código postal no encontrado';
            }
          }
          else {
            this.user.city = '';
            sp.innerHTML = 'Código postal no encontrado';
          }
          input.value = '';
        },
          error => {
            //console.log(error);
          });
    }
  }
  resetpass(email: String) {
    this._editUserService.resetPassword(email).subscribe(data => {
      this._appComponent.mensajeEmergente(data.Mensaje, "primary", "/admin/users?pag=1");
    })
  }
  ngOnInit() {
    this.getID();
  }
}
