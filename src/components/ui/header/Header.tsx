"use client";
import React from "react";

import { Anchor } from "@/components/ui/anchor/Anchor";
import CreateFeedbackForm from "@/features/feedback/components/create-feedback";
import { Button } from "../button";
import { cn } from "@/utils/utils";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        "bg-background z-10 w-3xs min-w-3xs max-w-3xs p-2 border-r h-full border-gray-500 flex flex-col gap-4 md:translate-0 max-md:absolute",
        isOpen ? "translate-0" : "-translate-x-full",
        "transition-transform duration-300"
      )}
    >
      <h1 className="text-3xl font-bold">
        <Anchor href="/dashboard">Feedback Board</Anchor>
      </h1>
      <ul>
        <li className="mb-2">
          <Anchor href="/" variant="disabled">
            My Feedback
          </Anchor>
        </li>
        <li className="mb-2">
          <Anchor href="/" variant="disabled">
            Users
          </Anchor>
        </li>
      </ul>
      <div className="border p-4 border-gray-500 background-gray-300">
        <CreateFeedbackForm />
      </div>
      <Button
        onClick={toggleOpen}
        className="md:hidden mt-auto absolute bottom-0 right-0 translate-x-full border-b-0"
        variant={"outline"}
      >
        menu
      </Button>
    </header>
  );
}

export { Header };
