import { useState } from "react";
import { UserPlus, Award, CreditCard, CalendarDays, Megaphone, Clock } from "lucide-react";
import { useMeetings } from "@/contexts/MeetingContext";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "students" | "rewards" | "payments" | "meetings" | "system";
  highlight?: string;
  meetingDate?: string;
  read: boolean;
}

const staticNotifications: Notification[] = [
  {
    id: "1", title: "New Student Registration", description: " has successfully registered using your referral code.", highlight: "Sarah Jenkins",
    time: "Just now", type: "students", read: false,
  },
  {
    id: "2", title: "Reward Unlocked!", description: "Congratulations! You've unlocked the  for reaching 50 student referrals this month.", highlight: "Gold Badge",
    time: "2h ago", type: "rewards", read: false,
  },
  {
    id: "3", title: "Payment Received", description: "Your commission of $240.00 for July Week 2 has been processed and sent to your bank.",
    time: "4h ago", type: "payments", read: true,
  },
  {
    id: "4", title: "Meeting Reminder", description: "Monthly Ambassador Sync with the Head of Partnerships.",
    time: "Yesterday", type: "meetings", read: true, meetingDate: "Oct 24, 2023 • 02:00 PM",
  },
  {
    id: "5", title: "Admin Announcement", description: "We've updated the marketing kit for the upcoming winter intake. Please download the new assets from your dashboard.",
    time: "2 days ago", type: "system", read: true,
  },
];

const typeIcons: Record<string, typeof UserPlus> = {
  students: UserPlus,
  rewards: Award,
  payments: CreditCard,
  meetings: CalendarDays,
  system: Megaphone,
};

const tabs = ["All", "Students", "Meetings", "Rewards", "System"] as const;

const NotificationsPage = () => {
  const { meetings } = useMeetings();
  const [activeTab, setActiveTab] = useState<string>("All");

  // Convert admin-scheduled meetings into notification items
  const meetingNotifications: Notification[] = meetings.map((m) => ({
    id: `meeting-${m.id}`,
    title: "New Meeting Scheduled",
    description: `"${m.title}" has been scheduled by admin.`,
    time: new Date(m.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
    type: "meetings",
    read: false,
    meetingDate: m.date
      ? new Date(m.date).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })
      : undefined,
  }));

  const allNotifications = [...meetingNotifications, ...staticNotifications];
  const [readIds, setReadIds] = useState<Set<string>>(new Set());

  const filtered = allNotifications.filter((n) => {
    const matchesTab = activeTab === "All" || n.type === activeTab.toLowerCase();
    return matchesTab;
  });

  const markAllRead = () => setReadIds(new Set(allNotifications.map((n) => n.id)));

  const isRead = (n: Notification) => readIds.has(n.id) || n.read;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        <span className="hover:text-primary cursor-pointer">Home</span>
        <span className="mx-2">›</span>
        <span className="text-foreground">Notifications</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
        <button onClick={markAllRead} className="text-sm font-medium text-primary hover:underline">
          Mark all as read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-9 px-4 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filtered.map((n) => {
          const Icon = typeIcons[n.type];
          const read = isRead(n);
          return (
            <div
              key={n.id}
              className={`bg-card border rounded-xl p-5 flex items-start gap-4 transition-colors ${
                !read ? "border-primary/40 bg-primary/5" : "border-border"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{n.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {n.highlight ? (
                        <>
                          <span className="text-primary font-medium">{n.highlight}</span>
                          {n.description.split(n.highlight).pop()}
                        </>
                      ) : (
                        n.description
                      )}
                    </p>
                  </div>
                  <span className="text-xs text-primary whitespace-nowrap flex-shrink-0">{n.time}</span>
                </div>
                {n.meetingDate && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-secondary text-xs text-muted-foreground">
                    <CalendarDays className="w-3 h-3" /> {n.meetingDate}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* View Past */}
      <div className="flex justify-center pt-2">
        <button className="h-10 px-6 rounded-lg border border-primary text-primary text-sm font-medium flex items-center gap-2 hover:bg-primary/10 transition-colors">
          View Past Notifications <Clock className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground pt-4">
        © 2023 TradeVed Inc. Campus Ambassador Portal.
      </p>
    </div>
  );
};

export default NotificationsPage;
