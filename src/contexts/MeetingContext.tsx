import { createContext, useContext, useState, ReactNode } from "react";

export interface ScheduledMeeting {
  id: string;
  title: string;
  agenda: string;
  date: string;
  invited: number;
  createdAt: string;
}

interface MeetingContextType {
  meetings: ScheduledMeeting[];
  addMeeting: (meeting: Omit<ScheduledMeeting, "id" | "createdAt">) => void;
}

const MeetingContext = createContext<MeetingContextType>({
  meetings: [],
  addMeeting: () => {},
});

export const useMeetings = () => useContext(MeetingContext);

export const MeetingProvider = ({ children }: { children: ReactNode }) => {
  const [meetings, setMeetings] = useState<ScheduledMeeting[]>([]);

  const addMeeting = (meeting: Omit<ScheduledMeeting, "id" | "createdAt">) => {
    const newMeeting: ScheduledMeeting = {
      ...meeting,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setMeetings((prev) => [newMeeting, ...prev]);
  };

  return (
    <MeetingContext.Provider value={{ meetings, addMeeting }}>
      {children}
    </MeetingContext.Provider>
  );
};
