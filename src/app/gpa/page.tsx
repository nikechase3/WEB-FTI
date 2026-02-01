"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Plus, Calculator } from "lucide-react"
import { Badge } from "@/components/ui/badge"


interface Course{
    id: string;
    name: string;
    credits: number;
    grade: string;
}

const gradePoints : {[key : string] : number} = {
    A : 4.0,
    AB: 3.5,
    B: 3.0,
    BC: 2.5,
    C: 2.0,
    D: 1.0,
    E: 0.0,
}

const gradeOptions = Object.keys(gradePoints)

export default function calculatorGrade () {
    const [courses, setCourses] =useState<Course[]>([{id: "1", name: "", credits: 0, grade: ""}])
    const [semesterGPA, setSemesterGPA] = useState<number>(0)
    const [totalCredits, setTotalCredits] = useState<number>(0)

    //ipk
    const [prevGPA, setPrevGPA] = useState<number>(0)
    const [prevCredits, setPrevCredits] = useState<number> (0)
    const [cumulativeGPA, setCumulativeGPA] = useState<number>(0)

    const addCourse = () => {
        const newCourse: Course = 
        {
            id: Date.now().toString(),
            name: "", 
            credits:0,
            grade: "",
        }
        setCourses([...courses, newCourse])
    }

    const updateCourse = (id: string, field: keyof Course, value: string | number) => {
        setCourses(courses.map((course) => (course.id === id ? {...course, [field] : value } : course)))
    }

    const removeCourse = (id : string) => {
        if(courses.length > 1 ){
            setCourses(courses.filter((course) => course.id !== id))
        }
    }

    const calculateGPA = () => {
        let totalPoints = 0;
        let totalCreditHours = 0;

        courses.forEach((course) => {
            if(course.grade && course.credits > 0){
                totalPoints += gradePoints[course.grade] * course.credits;
                totalCreditHours += course.credits
            }
        })

        const gpa = totalCreditHours > 0 ? totalPoints / totalCreditHours : 0;
        setSemesterGPA(gpa)
        setTotalCredits(totalCreditHours)

        if(prevCredits > 0 && prevGPA){
            const totalPrevPoints = prevGPA * prevCredits;
            const totalCurrentPoints = gpa * totalCreditHours;
            const totalAllCredits  =   prevCredits + totalCreditHours;
            const cumulativeGPA = totalAllCredits > 0 ? (totalPrevPoints + totalCurrentPoints) / totalAllCredits : 0;
            setCumulativeGPA(cumulativeGPA);
        }else{
            setCumulativeGPA(gpa)
        }
    }

    useEffect(() => {
        calculateGPA()
    }, [courses, prevGPA, prevCredits])

    

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


    const [Jurusan, pilJurusan] = useState("def");
    const materiData = [
    {
      id: 1,
      category: "FT",
      kode: "MA1101",
      image: "/materi/kalkulus.png",
      title: "Matematika Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      button: "testlib/MA1101",
      sks: 4
    },
    {
      id: 2,
      category: "FT",
      kode: "FI1101",
      image: "/materi/fisika.png",
      title: "Fisika Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      button: "testlib/KI1101",
      sks: 3
    },
    {
      id: 3,
      category: "FT",
      kode: "KI1101",
      image: "/materi/kimia.png",
      title: "Kimia Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      sks: 3
    },
    {
      id: 4,
      category: "FT",
      kode: "WI1101",
      image: "/materi/pancasila.png",
      title: "Pancasila",
      subtitle: "Tahap Tahun Pertama FTI",
      sks: 2
    },
    {
      id: 5,
      category: "FT",
      kode: "WI1102",
      image: "/materi/berkom.png",
      title: "Berpikir Komputasional",
      subtitle: "Tahap Tahun Pertama FTI",
      sks: 2
    },
    {
      id: 6,
      category: "FT",
      kode: "WI1103",
      image: "/materi/sustainibility.png",
      title: "Pengantar Prinsip Keberlanjutan",
      subtitle: "Tahap Tahun Pertama FTI",
      sks: 2
    },
    {
      id: 7,
      category: ["TF","TK","TB","TP","TI","MR"],
      kode: "WI2001",
      image: "/materi/prd.png",
      title: "Pengantar Rekayasa dan Desain",
      subtitle: "Mata Kuliah Wajib ITB",
      sks: 3
    },
    {
      id: 8,
      category: ["TF","TP","TI","MR"],
      kode: "WI2002",
      image: "/materi/lidia.png",
      title: "Literasi Data dan Inteligensi Artifisial",
      subtitle: "Mata Kuliah Wajib ITB",
      sks: 2
    },
    {
      id: 9,
      category: ["TF","TK","TB"],
      kode: "WI2003",
      image: "/materi/olahraga.png",
      title: "Olahraga",
      subtitle: "Mata Kuliah Wajib ITB",
      sks: 1
    },
    {
      id: 10,
      category: ["TK","TP"],
      kode: "WI2004",
      image: "/materi/Inggris.png",
      title: "Bahasa Inggris",
      subtitle: "Mata Kuliah Wajib ITB",
      sks: 2
    },
    {
      id: 11,
      category: ["TF","TK","TB","TP","TI","MR"],
      kode: "WI2005",
      image: "/materi/Indonesia.png",
      title: "Bahasa Indonesia",
      subtitle: "Mata Kuliah Wajib ITB",
      sks: 2
    },
    {
      id: 12,
      category: ["MR"],
      kode: "WI2021",
      image: "/materi/manajemen.png",
      title: "Manajemen Rekayasa Industri",
      subtitle: "Mata Kuliah Wajib ITB",
      sks: 2
    },    
    {
      id: 13,
      category: ["TK","TB","TI","MR"],
      kode: "MA1201",
      image: "/materi/kalkulus.png",
      title: "Matematika Dasar 2A",
      subtitle: "Matematika",
      sks: 4
    },
    {
      id: 14,
      category: ["TK","TI","MR"],
      kode: "FI1201",
      image: "/materi/fisika.png",
      title: "Fisika Dasar 2A",
      subtitle: "Fisika",
      sks: 3
    },
    {
      id: 15,
      category: ["TK"],
      kode: "KI1201",
      image: "/materi/kimia.png",
      title: "Kimia Dasar 2A",
      subtitle: "Kimia",
      sks: 3
    },
    {
      id: 16,
      category: ["TP","TB"],
      kode: "KI1201",
      image: "/materi/kimia.png",
      title: "Kimia Dasar 2B",
      subtitle: "Kimia",
      sks: 3
    },
    {
      id: 21,
      category: "TF",
      kode: "TF1201",
      image: "/materi/dasfis.png",
      title: "Dasar Fisika Teknik",
      subtitle: "Teknik Fisika",
      sks: 2
    },
    {
      id: 22,
      category: "TF",
      kode: "TF1202",
      image: "/materi/RL.png",
      title: "Rangkaian Listrik",
      subtitle: "Teknik Fisika",
      sks: 3
    },
    {
      id: 23,
      category: "TF",
      kode: "TF1203",
      image: "/materi/Material.png",
      title: "Pengantar Struktur dan Sifat Material",
      subtitle: "Teknik Fisika",
      sks: 2
    },
    {
      id: 24,
      category: "TF",
      kode: "MA2021",
      image: "/materi/Matriks.png",
      title: "Matriks dan Ruang Vektor",
      subtitle: "Teknik Fisika",
      sks: 3
    },
    {
      id: 31,
      category: "TB",
      kode: "TB1201",
      image: "/materi/nabati.png",
      title: "Ilmu Kimia Bahan Nabati",
      subtitle: "Teknik Bioenergi dan Kemurgi",
      sks: 3
    },
    {
      id: 32,
      category: "TB",
      kode: "TB1202",
      image: "/materi/profesi.png",
      title: "Kerekausahaan dan Pengenalan Keprofesian",
      subtitle: "Teknik Bioenergi dan Kemurgi",
      sks: 2
    },
    {
      id: 41,
      category: "TP",
      kode: "TP1201",
      image: "/materi/analisis.png",
      title: "Analisis Matematik dan Numerik",
      subtitle: "Teknik Pangan",
      sks: 3
    },
    {
      id: 42,
      category: "TP",
      kode: "TP1202",
      image: "/materi/pangan.png",
      title: "Mikrobiologi Pangan",
      subtitle: "Teknik Pangan",
      sks: 3
    },
    {
      id: 51,
      category: "TI",
      kode: "TI1201",
      image: "/materi/biologi.png",
      title: "Biologi Dasar",
      subtitle: "Teknik Industri",
      sks: 2
    },
    {
      id: 52,
      category: ["TI","MR"],
      kode: "TI1202",
      image: "/materi/gamtek.png",
      title: "Gambar Teknik",
      subtitle: "Teknik Industri",
      sks: 2
    },
    {
      id: 61,
      category: "FT",
      title: "Lab Fisika Dasar",
      subtitle: "Tahap Tahun Pertama FTI",
      sks: 1
    },
    {
      id: 62,
      category: "FT",
      title: "Lab Kimia Dasar",
      subtitle: "Tahap Tahun Pertama FTI",
      sks: 1
    },
  ];

  const filteredData = materiData.filter((item) => {
    if (Jurusan === "def") return true; 
    return item.category.includes(Jurusan);
  });

    useEffect(() => {
    if (Jurusan !== "def") {
        const autoCourses: Course[] = materiData
        .filter((item) => {
            if (Array.isArray(item.category)) {
            return item.category.includes(Jurusan);
            }
            return item.category === Jurusan;
        })
        .map((item) => ({
            id: item.id.toString(),
            name: item.title,
            credits: item.sks,
            grade: "",
        }));

        if (autoCourses.length > 0) {
        setCourses(autoCourses);
        }
    }
    }, [Jurusan]);

    return (
        <div className="min-h-screen bg-[#8ce5ff] py-20 mx-auto p-4 dark:bg-gray-900">
            <div className=" text-center mb-4">
                <h1 className= "font-bold text-5xl ">Kalkulator Indeks</h1>
                <p className="text-muted-foreground">Hitungan hanyalah prediksi dari yang sebenarnya</p>
                <select className = "p-3 rounded-lg border bg-white/70 dark:bg-white/30" style={{marginTop: 10 + 'px'}}  name ="jurusan" id = "jurusan" value={Jurusan}
                onChange={(e) => pilJurusan(e.target.value)}>
                <option className = "bg-blue-500" value = "def">Pilih jurusan</option>
                <option className = "bg-blue-700" value = "FT">Tahap Tahun Pertama FTI</option>
                <option className = "bg-blue-400" value = "TF">Teknik Fisika Semester 2</option>
                <option className = "bg-blue-700" value = "TK">Teknik Kimia Semester 2</option>
                <option className = "bg-blue-400" value = "TI">Teknik Industri Semester 2</option>
                <option className = "bg-blue-700" value = "MR">Manajemen Rekayasa Semester 2</option>
                <option className = "bg-blue-400" value = "TB">Teknik Bioenergi dan Kemurgi Semester 2</option>
                <option className = "bg-blue-700" value = "TP">Teknik Pangan Semester 2</option>
                </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
            
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="h-5 w-5"/>
                                Mata Kuliah 
                        </CardTitle>
                        <CardDescription>Masukan nilai yang diperoleh</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[65%] text-left font-bold text-gray-700 dark:text-white">Mata Kuliah</TableHead>
                                        <TableHead className="w-[12%] text-left font-bold text-gray-700 dark:text-white">SKS</TableHead>
                                        <TableHead className="w-[16%] text-left font-bold text-gray-700 dark:text-white">Nilai</TableHead>
                                        <TableHead className="w-[7%]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses.map((course) => (
                                        <TableRow
                                        key={course.id} className="hover:bg-transparent">
                                            <TableCell className="p-1">
                                                <Input
                                                value={course.name}
                                                placeholder="Mata Kuliah"
                                                onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell className="p-1">
                                                <Input
                                                type="number"
                                                value={course.credits === 0 ? "" : course.credits}
                                                placeholder="SKS"
                                                onChange={(e) => updateCourse(course.id, "credits", Number.parseInt(e.target.value) || 0)}
                                                />
                                            </TableCell>
                                            <TableCell className="p-1">
                                                <Select
                                                value={course.grade}
                                                onValueChange={(value) => updateCourse(course.id, "grade", value)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="pilih"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {gradeOptions.map((grade) => (
                                                            <SelectItem
                                                            key={grade}
                                                            value={grade}>
                                                                {grade} ({gradePoints[grade]})
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Button 
                                                variant={"ghost"}
                                                size={"sm"}
                                                onClick={() => removeCourse(course.id)}
                                                disabled= {courses.length === 1}>
                                                    <Trash2 className="w-2 h-2"/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ) )}
                                </TableBody>
                            </Table>
                            <Button className="w-full bg-transparent " onClick={addCourse} variant={"outline"}>
                                <Plus className="h-4 w-4 mr-2"/>
                            </Button>
                        </div>
                                {/*Hasil Perhitungan */}
                    </CardContent>
                </Card>

                        <div className="space-y-6 ">
                            <Card>
                                <CardHeader>

                                    <CardTitle>
                                        IPK Kumulatif &#40; Opsional &#41;
                                    </CardTitle>
                                    <CardDescription>
                                        Masukan IPK dan total SKS sebelumnya untuk menghitung IPK kumulatif
                                    </CardDescription>

                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="prev-gpa" className="mb-2">IPK Sebelumnya</Label>
                                            <Input
                                            id="prev-gpa"
                                            type="number"
                                            placeholder="0.00"
                                            step="0.01"
                                            min="0"
                                            max="4"
                                            value={prevGPA || ""}
                                            onChange={(e) => setPrevGPA(Number.parseFloat(e.target.value)|| 0)}/>
                                        </div>
                                        <div>
                                            <Label htmlFor="prev-sks" className="mb-2 text-nowrap">Total SKS Sebelumnya</Label>
                                            <Input
                                            id="prev-sks"
                                            type="number"
                                            placeholder="0"
                                            min="0"
                                            value={prevCredits || ""}
                                            onChange={(e) => setPrevCredits(Number.parseFloat(e.target.value)|| 0)}/>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Hasil Perhitungan</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4">
                                        <div className="grid gap-4">
                                            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                <div>
                                                    <p>IP Semester ini</p>
                                                    <p className= {`text-2xl font-semibold ${getGPAColor(semesterGPA)} `}>{semesterGPA.toFixed(2)}</p>
                                                    <Badge variant={"outline"} className="mt-1">{getGPALabel(semesterGPA)}</Badge>
                                                </div>

                                                <div>
                                                    <p>Total SKS</p>
                                                    <p>{totalCredits}</p>
                                                </div>
                                            </div>

                                            {prevCredits > 0 && prevGPA > 0 && (
                                                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                                                <div>
                                                    <p>IP Kumulatif</p>
                                                    <p className= {`text-2xl font-semibold ${getGPAColor(cumulativeGPA)} `}>{cumulativeGPA.toFixed(2)}</p>
                                                    <Badge variant={"outline"} className="mt-1">{getGPALabel(cumulativeGPA)}</Badge>
                                                </div>

                                                <div>
                                                    <p>Total SKS</p>
                                                    <p>{totalCredits + prevCredits}</p>
                                                </div>
                                            </div>
                                            )}
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="mb-2 font-semibold">Skala Penilaian</h4> 
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                {Object.entries(gradePoints).map(([grade, points]) => (
                                                    <div
                                                    key={grade} className="flex justify-between p-2 bg-muted rounded-lg">
                                                        <span>{grade}</span>
                                                        <span>{points.toFixed(1)}</span>
                                                    </div>
                                                ))}
                                            </div>   
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
            </div>
        </div>
    )
}
