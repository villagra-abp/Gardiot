import { Component, OnInit, HostListener, Renderer } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/delay';
declare var $: any;

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})

export class AdminProfileComponent implements OnInit {
  public user = new User("");
  public countries: any[] = [];
  public cities: any[] = [];
  public zip: string = "";
  public countryData: Observable<Array<Select2OptionData>>;
  public startCountry: Observable<string>;
  public cityData: Observable<Array<Select2OptionData>>;
  public startCity: Observable<string>;

  constructor(
    public _detailService: UserService,
    public _route: Router,
    public _appComponent: AppComponent,
    public datePipe: DatePipe,
    public _renderer: Renderer) { }

  @HostListener('document:keyup', ['$event'])
  searchZip(event: KeyboardEvent): void {
    //aqui vamos cargando las posibles ciudades a elegir
    let input = (<HTMLInputElement>document.querySelector("#zipCode"));
    if (input.value.length == 5) {
      this._detailService.listCitiesByZip(this.user.countryCode, input.value)
        .subscribe(data => {
          let sp = document.querySelector('#ciudad');
          //console.log(data);
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


  //Cargar usuario para mostrar sus datos en el formulario por defecto
  mostrar() {
    this._detailService.details(this.user)
      .subscribe(data => {
        //console.log(data);
        this.user.id = data.id;
        this.user.birthDate = this.datePipe.transform(data.birthDate, 'yyyy-MM-dd');
        this.user.photo = data.photo;
        this.user.name = data.name;
        this.user.lastName = data.lastName;
        this.user.city = data.city;
        this.user.countryCode = data.countryCode;
        this.listarPaises();
        this.mostrarCiudad();
      },
        error => {
          console.error(error);
          localStorage.clear();
          sessionStorage.clear();
          this._route.navigate(['/login']);
        });

  }

  //Enviar los nuevos datos del usuario a UserService para guardarlos
  edit() {
    this._detailService.modifyUserProfile(this.user)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("Datos modificados", "success", "");
      },
        error => {
          let v = JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
  }

  listarPaises() {
    this._detailService.listCoutries()
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
    //console.log("save city" + e.value);
    if (e.value != 0 && e.value !== undefined) {
      this.user.city = e.value;
      this.mostrarCiudad();
    }
  }

  ngOnInit() {
    this.mostrar();
  }

}
