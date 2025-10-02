"use client";
import React from "react";
import {
  MessageSquareWarning,
  TriangleAlert,
  OctagonX,
  CircleCheck,
  X,
  LucideProps,
} from "lucide-react";
import { cva } from "class-variance-authority";
import {
  type NotificationStore,
  type NotificationType,
} from "@/components/ui/notification";
import { cn } from "@/utils/utils";

const icons: Record<
  NotificationType["type"],
  React.ComponentType<LucideProps>
> = {
  info: MessageSquareWarning,
  success: CircleCheck,
  warning: TriangleAlert,
  error: OctagonX,
};

export type NotificationProps = {
  notification: NotificationType;
  onDismiss: NotificationStore["dismissNotification"];
};

const variants = cva("border gap-4 flex w-auto p4, bg-background", {
  variants: {
    variant: {
      info: "border-gray-500",
      warning: "border-warning text-warning",
      success: "border-success text-success",
      error: "border-destructive text-destructive",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

function Notification(props: NotificationProps) {
  const {
    notification: { type, message, id },
    onDismiss,
  } = props;

  const Icon = icons[type];

  return (
    <div className={cn(variants({ variant: type }))}>
      <Icon />
      <div className="grow">{message}</div>
      <X
        onClick={() => onDismiss(id)}
        className="pointer-events-auto cursor-pointer"
      />
    </div>
  );
}

export { Notification };
