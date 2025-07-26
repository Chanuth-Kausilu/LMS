import { Clock, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  instructor: string
  progress: number
  image: string
  category: string
}

export function CourseCard({ title, instructor, progress, image, category }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover" />
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as complete</DropdownMenuItem>
              <DropdownMenuItem>Add to favorites</DropdownMenuItem>
              <DropdownMenuItem>Share course</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground">Instructor: {instructor}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">{progress}% complete</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" /> 2h remaining
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {progress === 0 ? "Start Course" : progress === 100 ? "View Certificate" : "Continue Learning"}
        </Button>
      </CardFooter>
    </Card>
  )
}
