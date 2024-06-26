"use server";

import { getCardData } from "~/lib/actions";
import { ConsultationCard } from "~/components/consultation-card";
export async function ConsulatationCardWrapper() {
  const data = await getCardData();
  return <ConsultationCard cardData={data} />;
}
