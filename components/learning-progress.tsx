import { BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LearningProgress() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Learning Progress</CardTitle>
          <CardDescription>Your weekly activity</CardDescription>
        </div>
        <BarChart3 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Hours spent learning</p>
              <p className="text-sm font-medium">12.5 hrs</p>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: "70%" }} />
            </div>
            <p className="text-xs text-muted-foreground">+20% from last week</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Assignments completed</p>
              <p className="text-sm font-medium">8/10</p>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: "80%" }} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Course completion</p>
              <p className="text-sm font-medium">58%</p>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: "58%" }} />
            </div>
          </div>

          <div className="pt-2 flex justify-between text-xs">
            <div className="text-center">
              <p className="font-medium">Mon</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "40%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-medium">Tue</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "60%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-medium">Wed</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "80%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-medium">Thu</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "30%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-medium">Fri</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "50%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-medium">Sat</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "20%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-medium">Sun</p>
              <div className="mt-1 h-10 w-6 bg-muted/50 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-0 w-full bg-primary" style={{ height: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
