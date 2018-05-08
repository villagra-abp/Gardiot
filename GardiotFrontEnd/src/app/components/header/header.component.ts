import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user.class';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  user = new User("");
  constructor(private userService: UserService,
    private _ngZone: NgZone) {
  }

  toggleMenu(e) {
    if (window.innerWidth < 768) {
      if (e !== undefined) {
        if (e.target.classList.contains('opened'))
          e.target.classList.remove('opened');
        else
          e.target.classList.add('opened');
        e.preventDefault();
      }
      var elem = document.getElementById("sidebar-wrapper");
      let left = window.getComputedStyle(elem, null).getPropertyValue("left");
      if (left == "200px") {
        (<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left = "-200px";
      }
      else if (left == "-200px") {
        (<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left = "200px";
      }
    }

  }


  ngOnInit() {


    if (this.userService.isUserAuthenticated()) {
      /*
      this.userService.details(this.user).subscribe(data=>{
        this.user.photo=data.photo;
        this.user.name=data.name;
        if(this.user.name == ""){
          this.user.name="Perfil";
        }
        if(this.user.photo!==undefined){
          document.querySelector('#photoMenu>div').setAttribute('style', `width: 40px; height: 40px;
          background-color: rgba(255, 255, 255, 0.5);
          background-image: url("${this.user.photo}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          border: 0.5px solid #000;
          border-radius: 200px;
          cursor: pointer;
          `);
        }
        else
          document.querySelector('#photoMenu>div').setAttribute('style', 'display: none');
      });*/
      this.userService.isAuthenticated = this.userService.isUserAuthenticated();
      this.userService.isUserAdmin().subscribe(data => {
        if (data) {
          this.userService.isAdmin = true;
        }
        else {
          this.userService.isAdmin = false;
        }
      }, error => {
        this.userService.isAdmin = false;
      });
    }
    else {
      this.userService.isAdmin = false;
    }
  }
}

//sidebar
if (window.location.toString().indexOf("admin") >= 0) {
  $(window).resize(function() {
    var path = $(this);
    var contW = path.width();
    if (contW >= 768) {
      (<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left = "200px";
    } else {
      (<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left = "-200px";
    }
  });
  $(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

  });
}
