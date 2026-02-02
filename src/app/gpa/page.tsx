"use client"

import { useState, useMemo } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2, Plus, Calculator } from "lucide-react"
import { Badge } from "@/components/ui/badge"

/* ================= TYPES ================= */

type Grade = "A" | "AB" | "B" | "BC" | "C" | "D" | "E"



/* ================= GRADE SCALE ================= */

const gradePoints: Record<Grade, number> = {
  A: 4.0,
  AB: 3.5,
  B: 3.0,
  BC: 2.5,
  C: 2.0,
  D: 1.0,
  E: 0.0,
}

const gradeOptions = Object.keys(gradePoints) as Grade[]

/* ================= INTERFACES ================= */
interface Course {
  id: string
  name: string
  credits: number
  grade?: Grade
}

/* ================= COMPONENT ================= */

export default function CalculatorGrade() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "", credits: 0 },
  ])

  const [prevGPA, setPrevGPA] = useState(0)
  const [prevCredits, setPrevCredits] = useState(0)

  /* ================= ACTIONS ================= */

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      { id: Date.now().toString(), name: "", credits: 0 },
    ])
  }

  const updateCourse = (
    id: string,
    field: keyof Course,
    value: string | number
  ) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    )
  }

  const removeCourse = (id: string) => {
    setCourses((prev) =>
      prev.length > 1 ? prev.filter((c) => c.id !== id) : prev
    )
  }

  /* ================= CALCULATION (PURE) ================= */

  const { semesterGPA, totalCredits, cumulativeGPA } = useMemo(() => {
    let totalPoints = 0
    let currentCredits = 0

    courses.forEach((course) => {
      if (course.grade && course.credits > 0) {
        totalPoints += gradePoints[course.grade] * course.credits
        currentCredits += course.credits
      }
    })

    const semester =
      currentCredits > 0 ? totalPoints / currentCredits : 0

    const cumulative =
      prevCredits > 0
        ? (prevGPA * prevCredits + semester * currentCredits) /
          (prevCredits + currentCredits)
        : semester

    return {
      semesterGPA: semester,
      totalCredits: currentCredits,
      cumulativeGPA: cumulative,
    }
  }, [courses, prevGPA, prevCredits])

  /* ================= HELPERS ================= */

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.5) return "text-green-600"
    if (gpa >= 3.0) return "text-blue-600"
    if (gpa >= 2.5) return "text-yellow-600"
    return "text-red-600"
  }

  const getGPALabel = (gpa: number) => {
    if (gpa >= 3.5) return "Sangat Baik"
    if (gpa >= 3.0) return "Baik"
    if (gpa >= 2.5) return "Cukup"
    if (gpa >= 2.0) return "Kurang"
    return "Sangat Kurang"
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen py-20 mx-auto p-4 bg-linear-to-t from-sky-400">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold">Kalkulator Indeks</h1>
        <p className="text-muted-foreground">
          Hasil bersifat estimasi
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* INPUT */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Input Mata Kuliah
            </CardTitle>
            <CardDescription>
              Masukkan mata kuliah, SKS, dan nilai
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mata Kuliah</TableHead>
                  <TableHead className="w-20">SKS</TableHead>
                  <TableHead className="w-24">Nilai</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <Input
                        value={course.name}
                        placeholder="Nama"
                        onChange={(e) =>
                          updateCourse(course.id, "name", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min={1}
                        max={6}
                        value={course.credits || ""}
                        onChange={(e) =>
                          updateCourse(
                            course.id,
                            "credits",
                            Number(e.target.value) || 0
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={course.grade}
                        onValueChange={(v: Grade) =>
                          updateCourse(course.id, "grade", v)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih" />
                        </SelectTrigger>
                        <SelectContent>
                          {gradeOptions.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g} ({gradePoints[g]})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={courses.length === 1}
                        onClick={() => removeCourse(course.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Button
              className="w-full mt-4"
              variant="outline"
              onClick={addCourse}
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah Mata Kuliah
            </Button>
          </CardContent>
        </Card>

        {/* RESULT */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>IPK Kumulatif (Opsional)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <Label>IPK Sebelumnya</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={prevGPA || ""}
                  onChange={(e) =>
                    setPrevGPA(Number(e.target.value) || 0)
                  }
                />
              </div>
              <div>
                <Label>Total SKS</Label>
                <Input
                  type="number"
                  value={prevCredits || ""}
                  onChange={(e) =>
                    setPrevCredits(Number(e.target.value) || 0)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hasil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg flex justify-between">
                <div>
                  <p>IP Semester</p>
                  <p
                    className={`text-2xl font-semibold ${getGPAColor(
                      semesterGPA
                    )}`}
                  >
                    {semesterGPA.toFixed(2)}
                  </p>
                  <Badge variant="outline">
                    {getGPALabel(semesterGPA)}
                  </Badge>
                </div>
                <div>
                  <p>Total SKS</p>
                  <p>{totalCredits}</p>
                </div>
              </div>

              {prevCredits > 0 && (
                <div className="p-4 bg-primary/5 rounded-lg flex justify-between">
                  <div>
                    <p>IP Kumulatif</p>
                    <p
                      className={`text-2xl font-semibold ${getGPAColor(
                        cumulativeGPA
                      )}`}
                    >
                      {cumulativeGPA.toFixed(2)}
                    </p>
                    <Badge variant="outline">
                      {getGPALabel(cumulativeGPA)}
                    </Badge>
                  </div>
                  <div>
                    <p>Total SKS</p>
                    <p>{totalCredits + prevCredits}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
