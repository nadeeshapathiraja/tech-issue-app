import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../websocket.service';
import { StoreStatusService} from '../store-status.service';



@Component({
  selector: 'app-staff-dash-board',
  templateUrl: './staff-dash-board.component.html',
  styleUrls: ['./staff-dash-board.component.scss']
})
export class StaffDashBoardComponent implements OnInit {

  constructor(
    public webSocketService:WebsocketService,
    public storeStatusService:StoreStatusService
    
  ) { }

  ngOnInit() {
    
    this.storeStatusService.setLoginStatus()

    this.webSocketService.getNotification()
    .subscribe((msg:String)=>{
      alert(msg)
    })

    this.webSocketService.logActiveStaffUser(localStorage.getItem('empId'))
   
  }

}
