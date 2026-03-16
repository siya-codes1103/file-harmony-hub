export type Category = "Registration" | "Payment" | "Engagement";
export type DeliveryChannel = "WhatsApp" | "Email" | "In-app" | "SMS";
export type Audience = "Leads" | "Students" | "All" | "Paid" | "Trial";

export interface NudgeTemplate {
  id: string;
  name: string;
  category: Category;
  audience: Audience;
  channel: DeliveryChannel;
  content: string;
  lastUpdated: string;
  isActive: boolean;
}
