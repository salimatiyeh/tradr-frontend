// import { Component } from '@angular/core';

// @Component({
//   standalone: true,
//   selector: 'app-listing-detail',
//   imports: [],
//   styleUrl: './listing-detail.css',
//   template: `<h1>Listing Detail page</h1>`
// })
// export class ListingDetail {

// }
// src/app/listings/listing-detail/listing-detail.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  standalone: true,
  selector: 'app-listing-detail',
  imports: [CommonModule],
  templateUrl: './listing-detail.html',
  styleUrl: './listing-detail.css'
})
export class ListingDetail implements OnInit {
  listing: any;

  constructor(private route: ActivatedRoute, private listingService: ListingService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;
    if (id) {
      this.listingService.getListing(id).subscribe({
        next: (data) => {
          this.listing = data;
        },
        error: (err) => console.error('Error loading listing:', err)
      });
    }
  }
}
