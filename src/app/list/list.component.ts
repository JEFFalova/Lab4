import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  names:string[]=["martin", "mary", "jeff"]

  presidents : string[]=["Trump", "Michael", "Winston"]

president: any[]=
  [{name: "trump", term : "2003-2007"},
  {name: "trump", term : "2003-2007"},
  {name: "trump", term : "2003-2007"}]

}
