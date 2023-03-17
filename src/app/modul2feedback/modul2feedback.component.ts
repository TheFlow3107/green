import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modul2feedback',
  templateUrl: './modul2feedback.component.html',
  styleUrls: ['./modul2feedback.component.scss'],
})
export class Modul2feedbackComponent implements OnInit {

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

  goToQuest21feedback2() :void{
    this.router.navigateByUrl('/quest21feedback2');
  }

  goToQuest22feedback2() :void{
    this.router.navigateByUrl('/quest22feedback2');
  }

  goToQuest23feedback2() :void{
    this.router.navigateByUrl('/quest23feedback2');
  }

  goToQuest24feedback2() :void{
    this.router.navigateByUrl('/quest24feedback2');
  }
}