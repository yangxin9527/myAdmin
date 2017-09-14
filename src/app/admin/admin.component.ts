import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    //自动收缩左侧栏   关闭
    isCollapsed = false;
    constructor(
      public router:Router
    ) {
    }
    public exit():void{
      alert("退出登录，清楚cookie");
      this.router.navigateByUrl("/login");
    }
  
    ngOnInit() {
    }
  }