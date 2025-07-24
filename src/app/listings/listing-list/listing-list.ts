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
  listings: Listing[] = [];

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe((data) => {
      this.listings = data;
    })
  }
}
