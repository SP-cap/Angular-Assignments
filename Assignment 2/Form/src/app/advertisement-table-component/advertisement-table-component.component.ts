import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-advertisement-table-component',
  templateUrl: './advertisement-table-component.component.html',
  styleUrls: ['./advertisement-table-component.component.css']
})
export class AdvertisementTableComponentComponent implements OnInit {
  
  public collection:any;
  constructor(private commonService:CommonService , private router:ActivatedRoute) { }
 

  ngOnInit(): void {
    this.commonService.getAdList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection);
      
    });
    
  }
  
  
  }




