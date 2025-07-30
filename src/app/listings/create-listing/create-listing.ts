import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ListingService, Listing } from '../listing.service';

@Component({
  standalone: true,
  selector: 'app-create-listing',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-listing.html',
  styleUrls: ['./create-listing.css']
})
export class CreateListingComponent implements OnInit {
  form!: FormGroup;
  conditions = ['New', 'Like New', 'Used'] as const;

  constructor(
    private fb: FormBuilder,
    private listingService: ListingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      condition: ['New', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      acceptingTrades: [false],
      images: [''] // comma-separated URLs for now
    });
  }

  // submit() {
  //   if (this.form.invalid) return;
  //   const value = this.form.value as Listing & { images: string };
  //   // turn the CSV string into an array
  //   value.images = value.images
  //     .split(',')
  //     .map(u => u.trim())
  //     .filter(u => u);
  //   this.listingService.createListing(value).subscribe({
  //     next: listing => {
  //       // navigate to the new listing’s detail page
  //       this.router.navigate(['/listings', listing.id]);
  //     },
  //     error: err => console.error('Failed to create listing:', err)
  //   });
  // }
  submit() {
    if (this.form.invalid) return;

    // Pull the raw form values:
    const raw = this.form.value as {
      title: string;
      description: string;
      category: string;
      condition: 'New'|'Like New'|'Used';
      price: number;
      acceptingTrades: boolean;
      images: string;            // comma-separated string
    };

    // Turn the CSV into a true string[] for the API:
    const imagesArray = raw.images
      .split(',')
      .map(u => u.trim())
      .filter(u => u.length > 0);

    // Build the actual Listing payload you want to send:
    const payload: Listing = {
      title:            raw.title,
      description:      raw.description,
      category:         raw.category,
      condition:        raw.condition,
      price:            raw.price,
      acceptingTrades:  raw.acceptingTrades,
      images:           imagesArray
    };

    this.listingService.createListing(payload).subscribe({
      next: listing => {
        this.router.navigate(['/listings', listing.id]);
      },
      error: err => console.error('Failed to create listing:', err)
    });
  }

}
