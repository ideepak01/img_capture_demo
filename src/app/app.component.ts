import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'img_capture_demo';
  previewUrl = "";
  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files[0]) {
    const file = input.files[0];
    console.log('Captured File:', file);

    // Preview the image (optional)
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewUrl = e.target.result; // Bind this to <img> in template
    };
    reader.readAsDataURL(file);

    // TODO: Upload file to your backend here
    const formData = new FormData();
    formData.append('photo', file);

    // Example: HTTP upload
    // this.http.post('/api/upload', formData).subscribe(res => console.log(res));
  }
}

}
