import { Notification } from "./Notification";
import { useNotifications } from "./notifications-store";

function Notifications() {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <div>
      {notifications.map((notification) => (
        <Notification
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  );
}

export { Notifications };
