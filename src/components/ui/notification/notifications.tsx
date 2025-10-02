import { Notification } from "./Notification";
import { useNotifications } from "@/components/ui/notification";

function Notifications() {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed z-50 flex-col items-center inset-0 flex justify-start p-2 gap-2"
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
}

export { Notifications };
