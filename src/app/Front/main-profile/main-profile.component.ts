import { ActivatedRoute } from '@angular/router';
import { ManageAccountService } from './../../service/manage-account.service';
import { Profile } from './../../../model/Profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  idd:any;
  user!: Profile;
  typeId:any;

  constructor(private route: ActivatedRoute ,private userService:ManageAccountService) {
    this.user = new Profile();
    alert(this.route.url);
  this.idd = (this.route.snapshot.paramMap.get('id'));



    alert(this.idd)

    this.userService.getProfileById(this.idd).subscribe(

    (data) => {
      console.log(data);
      this.user = data;
    },
    (error) => console.log(error)
  ); }

  ngOnInit(): void {

  }
  }




