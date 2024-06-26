"use client";
import { type FC } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Currency, CardData } from "~/lib/actions";
const symbols: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
};
import { BookOpen } from "lucide-react";

export const ConsultationCard: FC<{ cardData: CardData }> = ({ cardData }) => {
  return (
    <Card className="m-auto w-96">
      <CardHeader className="">
        <CardTitle className="inline-flex items-center gap-2 text-2xl">
          <span className="">
            <BookOpen className="" />
          </span>
          <span className="">{cardData.name}</span>
        </CardTitle>
        <CardDescription className="inline-flex w-full items-center gap-1">
          <span className="text-muted-foreground">
            {cardData.start_date} - {cardData.end_date}
          </span>
          <i className="mx-2 text-blue-500">{cardData.duration} min</i>
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <p>{cardData.desc}</p>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="text-l mb-2 inline-flex w-full">
          <span>
            {cardData.price}
            {symbols[cardData.currency]}
          </span>
          <span
            className={cn(
              "mx-2",
              cardData.is_active ? "text-blue-500" : "text-muted-foreground",
            )}
          >
            {cardData.is_online ? "online" : "offline"}
          </span>
        </div>
        <Button className="h-10 w-full">Checkout</Button>{" "}
      </CardFooter>
    </Card>
  );
};
