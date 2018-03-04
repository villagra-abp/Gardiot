import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl:  'header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

    constructor( private user:UserService ){

    }
    toggleMenu(e){
      if(e.target.classList.contains('opened'))
        e.target.classList.remove('opened');
      else
        e.target.classList.add('opened');
      e.preventDefault();
  		var elem = document.getElementById("sidebar-wrapper");
  		let left = window.getComputedStyle(elem,null).getPropertyValue("left");
  		if(left == "200px"){
  			(<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left="-200px";
  		}
  		else if(left == "-200px"){
  			(<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left="200px";
  		}
    }
    ngOnInit(){

      if(this.user.isUserAuthenticated()){
        this.user.isAuthenticated=this.user.isUserAuthenticated();
        this.user.isUserAdmin().subscribe(data=>{
          if(data){
            this.user.isAdmin=true;
          }
          else{
            this.user.isAdmin=false;
          }
        },error=>{
          this.user.isAdmin=false;
        });
      }
      else{
        this.user.isAdmin=false;
      }

    }
}


//sidebar
$(window).resize(function() {
	var path = $(this);
	var contW = path.width();
	if(contW >= 751){
		(<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left="200px";
	}else{
		(<HTMLElement>document.getElementsByClassName("sidebar-toggle")[0]).style.left="-200px";
	}
});
$(document).ready(function() {
	$('.dropdown').on('show.bs.dropdown', function(e){
	    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});

});
