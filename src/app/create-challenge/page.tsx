"use client";

// components
import ChallengeForm from "./challenge-form";

// ui components
import { Separator } from "@/components/ui/separator";

export default function CreateChallenge() {
  return (
    <div className="relative">
      <div className="px-4 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-center xs:flex-row md:flex-nowrap">
        <div className="w-full py-10 space-y-6">
          <div>
            <h3 className="text-2xl font-medium">
              Create Challenge Pool
            </h3>
            <p className="text-base text-muted-foreground">
              Create a challenge pool to allow users to submit their solutions.
            </p>
          </div>
          <Separator className="opacity-30" />
          <ChallengeForm />
        </div>
      </div>
    </div>
  );
}
