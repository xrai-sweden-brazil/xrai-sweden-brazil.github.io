import React from "react";

interface ScheduleItem {
  time: string;
  activity: string;
  location?: string;
}

const schedule: ScheduleItem[] = [
  { time: "09:30 - 10:00", activity: "Welcome", location: "NAB auditorium" },
  { time: "10:00 - 12:00", activity: "Research Presentations and roundtable discussions.", location: "NAB auditorium" },
  { time: "12:00 - 13:00", activity: "Lunch", location: "TBA" },
  { time: "13:00 - 14:00", activity: "<b>Collaboration Corner</b> <br /> Formalise your lunch discussions, small groups will be formed around possible collaborations with the goal to setup communications and goals after the workshop.", location: "NAB auditorium" },
  { time: "14:00 - 15:30", activity: "Lab Visit ", location: "IC Uff" },
  { time: "15:30 - 16:00", activity: "Closing Remarks", location: "NAB auditorium" },
  { time: "19:30 - ~~~~~", activity: "Workshop Dinner", location: "TBA" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Day Schedule</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore the planned activities for the day.
            <br /><br />
            All Welcome, registration not required for the sessions from 10:00 to 14:30. 
            <br /><br />
            The lab visit has limited capacity unfortunately, so only those who registered will be able to join.
            <br />
        </p>
        <div className="max-w-2xl mx-auto">
          <ul className="divide-y divide-muted-foreground/10">
            {schedule.map((item, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row sm:items-center py-3">
                <span className="font-mono text-sm text-primary w-40">{item.time}</span>
                <span
                  className="flex-1 text-base"
                  dangerouslySetInnerHTML={{ __html: item.activity }}
                />
                {item.location && (
                  <span className="text-xs text-muted-foreground sm:ml-4">{item.location}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}