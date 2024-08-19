import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress = 0;
  isVisible = false;
  intervalId: any;

  constructor(private toast:ToastrService){}

  startMigration() {
    this.isVisible = true;
    this.progress = 0;

    this.intervalId = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(this.intervalId);
        this.isVisible = false;
       this.toast.success("Migration applied successfully")
      }
    }, 1000);
  }

  togglePopup() {
    this.isVisible = !this.isVisible;
  }

}
