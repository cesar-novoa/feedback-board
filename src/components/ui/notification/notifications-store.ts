import { nanoid } from "nanoid";
import { create } from "zustand";

type NotificationType = {
  id: string;
  type: "info" | "warning" | "success" | "error";
  title: string;
  message?: string;
};

type NotificationStore = {
  notifications: NotificationType[];
  addNotification: (notification: Omit<NotificationType, "id">) => void;
  dismissNotification: (id: NotificationType["id"]) => void;
};

const useNotifications = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: nanoid(), ...notification },
      ],
    })),
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    })),
}));

export { type NotificationType, type NotificationStore, useNotifications };
