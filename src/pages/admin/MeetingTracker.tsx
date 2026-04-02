import { useState } from "react";
import { Calendar, Users, Clock, Star, Plus, Download, Save, MoreVertical, ExternalLink, ChevronLeft, ChevronRight, Megaphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useMeetings } from "@/contexts/MeetingContext";

const defaultUpcoming = [
  {
    id: "default-1",
    icon: Calendar,
    title: "Weekly Ambassador Sync",
    agenda: "Q3 Content Roadmap & Q&A session",
    date: "Oct 24, 10:00 AM",
    invited: 42,
    badge: "IN 2 DAYS",
    badgeColor: "bg-primary",
  },
  {
    id: "default-2",
    icon: Megaphone,
    title: "Marketing Workshop",
    agenda: "Personal branding for TradeVed advocates",
    date: "Oct 27, 03:30 PM",
    invited: 15,
    badge: "IN 5 DAYS",
    badgeColor: "bg-primary",
  },
  {
    id: "default-3",
    icon: Star,
    title: "Quarterly Awards",
    agenda: "Recognizing top tier ambassadors",
    date: "Nov 05, 11:00 AM",
    invited: 120,
    badge: "NEXT MONTH",
    badgeColor: "bg-muted-foreground",
  },
];

const attendanceData = [
  { name: "Alex Rivera", tier: "Platinum", lastSeen: "Today, 09:12 AM", status: "Attended", score: 9 },
  { name: "Sarah Chen", tier: "Gold", lastSeen: "Oct 17, 10:45 AM", status: "Absent", score: 0 },
  { name: "Jordan Smith", tier: "Silver", lastSeen: "Oct 20, 02:20 PM", status: "Attended", score: 7 },
];

const tierColors: Record<string, string> = {
  Platinum: "text-primary",
  Gold: "text-yellow-500",
  Silver: "text-muted-foreground",
};

const MeetingTracker = () => {
  const { meetings, addMeeting } = useMeetings();
  const [statuses, setStatuses] = useState<Record<number, string>>(
    Object.fromEntries(attendanceData.map((a, i) => [i, a.status]))
  );
  const [showSchedule, setShowSchedule] = useState(false);
  const [form, setForm] = useState({ title: "", agenda: "", date: "", invited: "" });

  const handleStatusChange = (index: number, value: string) => {
    setStatuses((prev) => ({ ...prev, [index]: value }));
  };

  const handleSchedule = () => {
    if (!form.title || !form.date) {
      toast.error("Title and date are required");
      return;
    }
    addMeeting({
      title: form.title,
      agenda: form.agenda,
      date: form.date,
      invited: parseInt(form.invited) || 0,
    });
    toast.success(`Meeting "${form.title}" scheduled! Notification sent.`);
    setForm({ title: "", agenda: "", date: "", invited: "" });
    setShowSchedule(false);
  };

  // Merge admin-scheduled meetings into upcoming cards
  const scheduledCards = meetings.map((m) => ({
    id: m.id,
    icon: Calendar,
    title: m.title,
    agenda: m.agenda,
    date: m.date,
    invited: m.invited,
    badge: "NEW",
    badgeColor: "bg-primary",
  }));

  const allUpcoming = [...scheduledCards, ...defaultUpcoming];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Home &gt; <span className="text-primary">Meeting Tracker</span></p>
          <h1 className="text-2xl font-bold text-foreground">Meeting Tracker</h1>
          <p className="text-sm text-muted-foreground mt-1">Coordinate sync-ups and monitor program participation</p>
        </div>
        <Button onClick={() => setShowSchedule(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
          <Plus className="w-4 h-4 mr-1" /> Schedule New Meeting
        </Button>
      </div>

      {/* Schedule Dialog */}
      {showSchedule && (
        <Card className="p-6 border-primary/30 bg-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-foreground">Schedule New Meeting</h3>
            <button onClick={() => setShowSchedule(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Meeting Title *</label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Weekly Ambassador Sync" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Date & Time *</label>
              <Input type="datetime-local" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Agenda</label>
              <Input value={form.agenda} onChange={(e) => setForm({ ...form, agenda: e.target.value })} placeholder="Meeting agenda" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Invitees Count</label>
              <Input type="number" value={form.invited} onChange={(e) => setForm({ ...form, invited: e.target.value })} placeholder="0" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowSchedule(false)}>Cancel</Button>
            <Button onClick={handleSchedule} className="bg-primary text-primary-foreground">Schedule & Notify</Button>
          </div>
        </Card>
      )}

      {/* Upcoming Meetings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Upcoming Meetings</h2>
          <button className="text-sm text-primary hover:underline font-medium">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allUpcoming.slice(0, 6).map((meeting) => (
            <Card key={meeting.id} className="p-5 bg-card border flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <meeting.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${meeting.badgeColor} text-primary-foreground`}>
                    {meeting.badge}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-sm">{meeting.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Agenda: {meeting.agenda}</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mt-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {meeting.date}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {meeting.invited} Invited</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-3 border-primary text-primary hover:bg-primary/10 text-xs font-semibold"
                  onClick={() => toast.info("Join link copied!")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" /> Join Link
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Attendance & Participation */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">Attendance & Participation</h2>
            <p className="text-xs text-muted-foreground">Last Session: Weekly Sync - Oct 17</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs" onClick={() => toast.success("Report exported")}>
              <Download className="w-3 h-3 mr-1" /> Export Report
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold" onClick={() => toast.success("Progress saved")}>
              <Save className="w-3 h-3 mr-1" /> Save Progress
            </Button>
          </div>
        </div>

        <Card className="border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[10px] uppercase tracking-wider font-semibold">Ambassador Name</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider font-semibold">Last Seen</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider font-semibold">Attendance Status</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider font-semibold">Contribution Score (0-10)</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((amb, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {amb.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{amb.name}</p>
                        <p className={`text-[10px] ${tierColors[amb.tier] || "text-muted-foreground"}`}>Tier: {amb.tier}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{amb.lastSeen}</TableCell>
                  <TableCell>
                    <Select value={statuses[i]} onValueChange={(v: string) => handleStatusChange(i, v)}>
                      <SelectTrigger className={`w-28 h-8 text-xs font-medium border-0 ${statuses[i] === "Attended" ? "bg-primary/20 text-primary" : "bg-destructive/15 text-destructive"}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Attended">Attended</SelectItem>
                        <SelectItem value="Absent">Absent</SelectItem>
                        <SelectItem value="Excused">Excused</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-sm font-bold text-foreground">{amb.score}</span>
                      <Progress value={amb.score * 10} className="h-2 w-24" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <p className="text-xs text-muted-foreground">Showing 3 of 152 ambassadors</p>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded border flex items-center justify-center text-muted-foreground hover:bg-secondary"><ChevronLeft className="w-3 h-3" /></button>
              <button className="w-7 h-7 rounded border flex items-center justify-center text-muted-foreground hover:bg-secondary"><ChevronRight className="w-3 h-3" /></button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MeetingTracker;
