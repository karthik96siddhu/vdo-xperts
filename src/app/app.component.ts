import { CommonModule } from "@angular/common";
import { Component, HostListener, OnInit, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { PACKAGES_DATA } from "../data/packages";
import { WHY_CHOOSE_US_DATA } from "../data/whyChooseUs";
import { ContactInquiryData } from "../types";
import { InquiryService } from "./inquiry.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly inquiryService = inject(InquiryService);

  readonly packages = PACKAGES_DATA;
  readonly advantages = WHY_CHOOSE_US_DATA;
  readonly contactEmail = "contact@vdoxperts.com";
  readonly heroImage =
    "/assets/images/wedding_hero_cinematic_1788246762883.jpg";
  readonly timelineImage = "/assets/images/premiere_timeline_1788243590820.jpg";
  readonly inquiryForm = this.formBuilder.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    phone: [""],
    website: [""],
  });

  isLoading = true;
  isScrolled = false;
  mobileMenuOpen = false;
  isSubmitting = false;
  submittedSuccess = false;
  errorMessage = "";
  copiedEmail = false;
  prefilledProject = "";

  get currentYear(): number {
    return new Date().getFullYear();
  }

  ngOnInit(): void {
    window.setTimeout(() => (this.isLoading = false), 600);
  }

  @HostListener("window:scroll")
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    this.mobileMenuOpen = false;
  }

  startProject(project?: string): void {
    if (project) {
      this.prefilledProject = project;
    }
    this.scrollTo("#contact");
  }

  async submitInquiry(): Promise<void> {
    this.errorMessage = "";
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      this.errorMessage = "Please provide a valid email address.";
      return;
    }

    this.isSubmitting = true;
    const value = this.inquiryForm.getRawValue();
    const payload: ContactInquiryData = {
      email: value.email,
      phone: value.phone,
      website: value.website,
    };
    const result = await this.inquiryService.submit(payload);
    this.isSubmitting = false;
    if (result.success) {
      this.submittedSuccess = true;
    } else {
      this.errorMessage = result.message;
    }
  }

  resetInquiry(): void {
    this.submittedSuccess = false;
    this.prefilledProject = "";
    this.inquiryForm.reset({ email: "", phone: "", website: "" });
  }

  async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.contactEmail);
    this.copiedEmail = true;
    window.setTimeout(() => (this.copiedEmail = false), 2000);
  }
}
