import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing',
  imports: [ButtonModule, RouterModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
