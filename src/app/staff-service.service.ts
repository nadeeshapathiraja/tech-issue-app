import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Complaint from './complaint';


@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  private url='http://localhost:4000/staff';

  constructor(
    private http:HttpClient
  ) { }

  getAllocatedComplaints(empId)
  {
    const params= new HttpParams()
    .set('empId',empId)
    return this.http.get<Complaint[]>(`${this.url}/viewAllocatedComplaints`,{params})
  }
}