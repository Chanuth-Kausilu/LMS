import { CalendarDays, Clock, PlayCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseCard } from "@/components/course-card"
import { UpcomingAssignments } from "@/components/upcoming-assignments"
import { LearningProgress } from "@/components/learning-progress"

export function MainDashboard() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
          <p className="text-muted-foreground">Continue your learning journey. You have 3 courses in progress.</p>
        </div>

        <Tabs defaultValue="my-courses">
          <TabsList>
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="my-courses" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Introduction to Web Development"
                instructor="Sarah Johnson"
                progress={65}
                image="/images.png?height=200&width=400"
                category="Development"
              />
              <CourseCard
                title="Data Science Fundamentals"
                instructor="Michael Chen"
                progress={32}
                image="/data.png?height=200&width=400"
                category="Data Science"
              />
              <CourseCard
                title="UX/UI Design Principles"
                instructor="Emma Rodriguez"
                progress={78}
                image="/ui.png?height=200&width=400"
                category="Design"
              />
            </div>
          </TabsContent>
          <TabsContent value="recommended">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Advanced JavaScript Patterns"
                instructor="David Miller"
                progress={0}
                image="/placeholder.svg?height=200&width=400"
                category="Development"
              />
              <CourseCard
                title="Machine Learning for Beginners"
                instructor="Priya Sharma"
                progress={0}
                image="/placeholder.svg?height=200&width=400"
                category="Data Science"
              />
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="HTML & CSS Basics"
                instructor="James Wilson"
                progress={100}
                image="/placeholder.svg?height=200&width=400"
                category="Development"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <LearningProgress />
          <UpcomingAssignments />

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2">
                  <PlayCircle className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Watched "JavaScript Functions"</p>
                  <p className="text-xs text-muted-foreground">Introduction to Web Development</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Submitted "Data Analysis Project"</p>
                  <p className="text-xs text-muted-foreground">Data Science Fundamentals</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Spent 45 minutes on "Design Thinking"</p>
                  <p className="text-xs text-muted-foreground">UX/UI Design Principles</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
