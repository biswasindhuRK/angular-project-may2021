import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Logout User
  logOut(){
    // this.toastr.success('Success', "Logged Out Successfully");
    localStorage.removeItem('userData');
    // this.router.navigate(['/login']);
  }
}
