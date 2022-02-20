var Notifications = /** @class */ (function () {
    function Notifications() {
    }
    Notifications.getLatestNotificationsAdmin = function (e) {
        $("div.outputNotifications").html('');
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: "/g/n/a/a/u",
            method: "GET",
            success: function (data) {
                $(".outputNotifications").append('<a href="/d/a/n/t/a">View All</a><hr><br>');
                for (var i = 0; i < data.length; i++) {
                    var user = data[i].user_type.replace("App\\", "");
                    var auditable_type = data[i].auditable_type.replace("App\\Models\\", "");
                    var timeCreated = data[i].created_at;
                    $("div.outputNotifications").append("<li class='notificationItem'><i class=\"fas fa-exclamation-triangle\"></i> " + user + "(" + "id=" + data[i].user_id + ")" + " " + data[i].event + " " + auditable_type + " on " + timeCreated + "</li><hr>");
                }
            }
        });
    };
    /**
     * On click of notification make it read.
     */
    Notifications.markNotificationAsViewed = function (event, notification) {
        event.preventDefault();
        // marking notification as viewed then redirecting user to notification target page.
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: "/mark/notification/as/viewed",
            method: "post",
            data: notification,
            success: function () {
                window.location.href = notification.url;
            }
        });
    };
    return Notifications;
}());
