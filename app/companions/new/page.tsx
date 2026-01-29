/* eslint-disable react/jsx-no-undef */
import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const canCreateCompanion = await newCompanionPermissions();
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="Companions Limit reached"
            width={300}
            height={300}
          />
          <div className="cta-badge">Upgrade Your Plan</div>
          <Link href="/subscription"  className="btn-primary mt-4 w-full justify-center">
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
