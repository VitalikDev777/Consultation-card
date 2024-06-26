"use server";

export type Currency = "INR" | "USD";
export type Location = "Online" | "Onsite";
export type Service_Type = "online" | "offline";

export interface CardData {
  id: number;
  user_id: number;
  name: string;
  icon: string;
  currency: Currency;
  int_price: null | number;
  price: number;
  capacity: number;
  start_date: string;
  end_date: string;
  short_desc: string;
  desc: string;
  location: Location;
  created_at: Date;
  updated_at: Date;
  duration: string;
  is_online: boolean;
  is_active: boolean;
  slug: string;
  service_type: Service_Type;
}
export async function getCardData(): Promise<CardData> {
  const data = await import("~/lib/mock.json");
  return data.default as unknown as CardData;
}
