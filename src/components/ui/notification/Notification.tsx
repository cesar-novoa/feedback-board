"use client";
import React, { ReactNode } from "react";
import { Info, CircleAlert, CircleX, CircleCheck } from "lucide-react";
import {
  type NotificationStore,
  type Notification as NotificationType,
} from "./notifications-store";

const icons: Record<NotificationType["type"], ReactNode> = {
  info: <Info />,
  success: <CircleCheck />,
  warning: <CircleAlert />,
  error: <CircleX />,
};

export type NotificationProps = {
  notification: NotificationType;
  onDismiss: NotificationStore["dismissNotification"];
};

function Notification(props: NotificationProps) {
  const {
    notification: { type, message },
    onDismiss,
  } = props;

  return (
    <div>
      {icons[type]}
      {message}
    </div>
  );
}

export { Notification };
