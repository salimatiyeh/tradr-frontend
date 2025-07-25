import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingService, Listing } from '../listing.service';

@Component({
  standalone: true,
  selector: 'app-listing-list',
  imports: [CommonModule],
  styleUrl: './listing-list.css',
  templateUrl: './listing-list.html'
})
export class ListingList implements OnInit {
  listings: any[] = [];

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.listingService.getListings().subscribe({
      next: (data) => {
        this.listings = data;
      },
      error: (err) => {
        console.error('Error loading listings:', err);
      }
    });
  }
}
