import { useState } from "react";
import { Calendar, Users, Clock, Star, Plus, Download, Save, MoreVertical, ExternalLink, ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const upcomingMeetings = [
  {
    id: 1,
    icon: Calendar,
    title: "Weekly Ambassador Sync",
    agenda: "Q3 Content Roadmap & Q&A session",
    date: "Oct 24, 10:00 AM",
    invited: 42,
    badge: "IN 2 DAYS",
    badgeColor: "bg-[hsl(72,70%,45%)]",
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Marketing Workshop",
    agenda: "Personal branding for TradeVed advocates",
    date: "Oct 27, 03:30 PM",
    invited: 15,
    badge: "IN 5 DAYS",
    badgeColor: "bg-[hsl(72,70%,45%)]",
  },
  {
    id: 3,
    icon: Star,
    title: "Quarterly Awards",
    agenda: "Recognizing top tier ambassadors",
    date: "Nov 05, 11:00 AM",
    invited: 120,
    badge: "NEXT MONTH",
    badgeColor: "bg-[hsl(30,5%,30%)]",
  },
];

const attendanceData = [
  { name: "Alex Rivera", tier: "Platinum", lastSeen: "Today, 09:12 AM", status: "Attended", score: 9 },
  { name: "Sarah Chen", tier: "Gold", lastSeen: "Oct 17, 10:45 AM", status: "Absent", score: 0 },
  { name: "Jordan Smith", tier: "Silver", lastSeen: "Oct 20, 02:20 PM", status: "Attended", score: 7 },
];

const tierColors: Record<string, string> = {
  Platinum: "text-[hsl(72,70%,55%)]",
  Gold: "text-[hsl(45,80%,55%)]",
  Silver: "text-[hsl(0,0%,65%)]",
};

const MeetingTracker = () => {
  const [statuses, setStatuses] = useState<Record<number, string>>(
    Object.fromEntries(attendanceData.map((a, i) => [i, a.status]))
  );

  const handleStatusChange = (index: number, value: string) => {
    setStatuses(prev => ({ ...prev, [index]: value }));
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-[hsl(30,5%,50%)] mb-1">Home &gt; <span className="text-[hsl(72,70%,45%)]">Meeting Tracker</span></p>
          <h1 className="text-2xl font-bold text-[hsl(30,5%,15%)]">Meeting Tracker</h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Coordinate sync-ups and monitor program participation</p>
        </div>
        <Button
          onClick={() => toast.success("Schedule meeting dialog coming soon")}
          className="bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)] font-semibold"
        >
          <Plus className="w-4 h-4 mr-1" /> Schedule New Meeting
        </Button>
      </div>

      {/* Upcoming Meetings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[hsl(30,5%,15%)]">Upcoming Meetings</h2>
          <button className="text-sm text-[hsl(72,70%,45%)] hover:underline font-medium">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingMeetings.map((meeting) => (
            <Card key={meeting.id} className="p-5 bg-[hsl(50,20%,97%)] border-[hsl(50,15%,88%)] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[hsl(50,15%,90%)] flex items-center justify-center">
                    <meeting.icon className="w-4 h-4 text-[hsl(72,70%,45%)]" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${meeting.badgeColor} text-[hsl(30,5%,10%)]`}>
                    {meeting.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[hsl(30,5%,15%)] text-sm">{meeting.title}</h3>
                <p className="text-xs text-[hsl(30,5%,50%)] mt-1">Agenda: {meeting.agenda}</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mt-3 text-[10px] text-[hsl(30,5%,50%)]">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {meeting.date}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {meeting.invited} Invited</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-3 border-[hsl(72,70%,45%)] text-[hsl(72,70%,45%)] hover:bg-[hsl(72,70%,45%)]/10 text-xs font-semibold"
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
            <h2 className="text-lg font-bold text-[hsl(30,5%,15%)]">Attendance & Participation</h2>
            <p className="text-xs text-[hsl(30,5%,50%)]">Last Session: Weekly Sync - Oct 17</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-[hsl(50,15%,85%)] text-[hsl(30,5%,35%)] text-xs" onClick={() => toast.success("Report exported")}>
              <Download className="w-3 h-3 mr-1" /> Export Report
            </Button>
            <Button size="sm" className="bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)] text-xs font-semibold" onClick={() => toast.success("Progress saved")}>
              <Save className="w-3 h-3 mr-1" /> Save Progress
            </Button>
          </div>
        </div>

        <Card className="border-[hsl(50,15%,88%)] bg-[hsl(50,20%,97%)]">
          <Table>
            <TableHeader>
              <TableRow className="border-[hsl(50,15%,88%)]">
                <TableHead className="text-[10px] uppercase tracking-wider text-[hsl(30,5%,50%)] font-semibold">Ambassador Name</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-[hsl(30,5%,50%)] font-semibold">Last Seen</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-[hsl(30,5%,50%)] font-semibold">Attendance Status</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-[hsl(30,5%,50%)] font-semibold">Contribution Score (0-10)</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-[hsl(30,5%,50%)] font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((amb, i) => (
                <TableRow key={i} className="border-[hsl(50,15%,88%)]">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center text-xs font-bold text-[hsl(30,5%,35%)]">
                        {amb.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{amb.name}</p>
                        <p className={`text-[10px] ${tierColors[amb.tier] || "text-[hsl(30,5%,50%)]"}`}>Tier: {amb.tier}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-[hsl(30,5%,40%)]">{amb.lastSeen}</TableCell>
                  <TableCell>
                    <Select value={statuses[i]} onValueChange={(v) => handleStatusChange(i, v)}>
                      <SelectTrigger className={`w-28 h-8 text-xs font-medium border-0 ${statuses[i] === "Attended" ? "bg-[hsl(72,70%,45%)]/20 text-[hsl(72,70%,35%)]" : "bg-[hsl(0,60%,50%)]/15 text-[hsl(0,60%,45%)]"}`}>
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
                      <span className="w-8 h-8 rounded-md bg-[hsl(50,15%,90%)] flex items-center justify-center text-sm font-bold text-[hsl(30,5%,15%)]">{amb.score}</span>
                      <Progress value={amb.score * 10} className="h-2 w-24 bg-[hsl(50,15%,88%)] [&>div]:bg-[hsl(72,70%,45%)]" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[hsl(50,15%,90%)] text-[hsl(30,5%,50%)]">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-3 border-t border-[hsl(50,15%,88%)]">
            <p className="text-xs text-[hsl(30,5%,50%)]">Showing 3 of 152 ambassadors</p>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,50%)] hover:bg-[hsl(50,15%,90%)]"><ChevronLeft className="w-3 h-3" /></button>
              <button className="w-7 h-7 rounded border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,50%)] hover:bg-[hsl(50,15%,90%)]"><ChevronRight className="w-3 h-3" /></button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MeetingTracker;
