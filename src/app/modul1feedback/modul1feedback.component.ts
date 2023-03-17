import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modul1feedback',
  templateUrl: './modul1feedback.component.html',
  styleUrls: ['./modul1feedback.component.scss'],
})
export class Modul1feedbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToQuest11feedback2(): void {
    this.router.navigateByUrl('/quest11feedback2');
  }

  goToQuest12feedback2(): void {
    this.router.navigateByUrl('/quest12feedback2');
  }

}