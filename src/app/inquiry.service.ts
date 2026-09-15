import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { ContactInquiryData } from "../types";
import { environment } from "../environments/environment";

export interface InquiryResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: "root" })
export class InquiryService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.apiBaseUrl}customer-contacts`;

  async submit(data: ContactInquiryData): Promise<InquiryResponse> {
    try {
      await firstValueFrom(
        this.http.post(this.endpoint, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }),
      );
      return {
        success: true,
        message: "Your project inquiry has been transmitted successfully.",
      };
    } catch (error: any) {
      console.error("Inquiry submission error:", error);
      return {
        success: false,
        message:
          error?.error?.message ||
          error?.message ||
          "Submission failed. Please email us directly at contact@vdoxperts.com",
      };
    }
  }
}
