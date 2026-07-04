import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [
    RouterLink
  ],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css',
})
export class ComingSoon {

  private readonly route = inject(ActivatedRoute);

  protected readonly title = computed(() => {
    return this.route.snapshot.data['title'] ?? 'Coming Soon';
  });

  protected readonly description = computed(() => {
    return this.route.snapshot.data['description'] ?? 'This section will be available soon.';
  });

}
