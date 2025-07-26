import { CalendarDays } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingAssignments() {
  const assignments = [
    {
      title: "JavaScript Quiz",
      course: "Introduction to Web Development",
      dueDate: "Today",
      urgent: true,
    },
    {
      title: "Data Visualization Project",
      course: "Data Science Fundamentals",
      dueDate: "Tomorrow",
      urgent: true,
    },
    {
      title: "User Persona Creation",
      course: "UX/UI Design Principles",
      dueDate: "In 3 days",
      urgent: false,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>Assignments due soon</CardDescription>
        </div>
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((assignment, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`mt-0.5 h-2 w-2 rounded-full ${assignment.urgent ? "bg-destructive" : "bg-muted"}`} />
              <div>
                <p className="font-medium text-sm">{assignment.title}</p>
                <p className="text-xs text-muted-foreground">{assignment.course}</p>
                <p
                  className={`text-xs ${assignment.urgent ? "text-destructive font-medium" : "text-muted-foreground"}`}
                >
                  Due: {assignment.dueDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
