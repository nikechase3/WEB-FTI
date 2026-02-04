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
    const [coursesS1, setCoursesS1] =useState<Course[]>([{id: "1", name: "", credits: 0, grade: ""}])
    const [courses, setCourses] =useState<Course[]>([{id: "1", name: "", credits: 0, grade: ""}])
    const [semesterGPA, setSemesterGPA] = useState<number>(0)
    const [totalCredits, setTotalCredits] = useState<number>(0)

    //ipk
    const [prevGPA, setPrevGPA] = useState<number>(0)
    const [prevCredits, setPrevCredits] = useState<number> (0)
    const [cumulativeGPA, setCumulativeGPA] = useState<number>(0)
    const [gpaS1, setGPAS1] = useState<number>(0);
    const [sksS1, setSKSS1] = useState<number>(0);
    const [gpaS2, setGPAS2] = useState<number>(0);
    const [sksS2, setSKSS2] = useState<number>(0);

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

    const updateCourseS1 = (id: string, field: keyof Course, value: any) => {
        setCoursesS1((prev) =>
            prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
        );
    };
    
    const updateCourse = (id: string, field: keyof Course, value: string | number) => {
        setCourses(courses.map((course) => (course.id === id ? {...course, [field] : value } : course)))
    }

    const removeCourse = (id : string) => {
        if(courses.length > 1 ){
            setCourses(courses.filter((course) => course.id !== id))
        }
    }

    const calculateGPA = () => {
        // Helper to calculate single semester stats
        const getStats = (items: Course[]) => {
            let points = 0;
            let credits = 0;
            items.forEach((c) => {
                if (c.grade && c.credits > 0) {
                    points += gradePoints[c.grade] * c.credits;
                    credits += c.credits;
                }
            });
            return { points, credits };
        };

        // calc semester 1
        const s1 = getStats(coursesS1);
        const resS1 = s1.credits > 0 ? s1.points / s1.credits : 0;
        setGPAS1(resS1);
        setSKSS1(s1.credits);

        // calc semester 2
        const s2 = getStats(courses);
        const resS2 = s2.credits > 0 ? s2.points / s2.credits : 0;
        setGPAS2(resS2);
        setSKSS2(s2.credits);

        // calc kumulatif
        const combinedCredits = s1.credits + s2.credits;
        const combinedGPA = combinedCredits > 0 ? (s1.points + s2.points) / combinedCredits : 0;
        setCumulativeGPA(combinedGPA);
        setTotalCredits(combinedCredits);
    };

    useEffect(() => {
        calculateGPA()
    }, [courses, prevGPA, prevCredits, coursesS1])

    

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
  const ftCourses = materiData
    .filter((item) => item.category === "FT")
    .map((item) => ({
      id: `s1-${item.id}`,
      name: item.title,
      credits: item.sks || 2,
      grade: "",
    }));
  setCoursesS1(ftCourses);
}, []); 

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
                <option className = "bg-blue-400" value = "TF">Teknik Fisika</option>
                <option className = "bg-blue-700" value = "TK">Teknik Kimia</option>
                <option className = "bg-blue-400" value = "TI">Teknik Industri</option>
                <option className = "bg-blue-700" value = "MR">Manajemen Rekayasa</option>
                <option className = "bg-blue-400" value = "TB">Teknik Bioenergi dan Kemurgi</option>
                <option className = "bg-blue-700" value = "TP">Teknik Pangan</option>
                </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
            
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="h-5 w-5"/>
                                Mata Kuliah Semester 1
                        </CardTitle>
                        <CardDescription>Masukan nilai yang diperoleh</CardDescription>
                    </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-b">
                                    <TableHead className="w-[70%]">Mata Kuliah</TableHead>
                                    <TableHead className="w-[10%]">SKS</TableHead>
                                    <TableHead className="w-[13%]">Nilai</TableHead>
                                    <TableHead className="w-[7%]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {coursesS1.map((course) => (
                                    <TableRow key={course.id} className="border-b last:border-0">
                                        <TableCell className="py-2 px-1">
                                        <Input
                                            value={course.name}
                                            placeholder="Nama Mata Kuliah"
                                            onChange={(e) => updateCourseS1(course.id, "name", e.target.value)}
                                            className="h-9"
                                        />
                                        </TableCell>
                                        <TableCell className="py-2 px-1">
                                        <Input
                                            type="number"
                                            value={course.credits === 0 ? "" : course.credits}
                                            onChange={(e) => updateCourseS1(course.id, "credits", parseInt(e.target.value) || 0)}
                                            className="h-9"
                                        />
                                        </TableCell>
                                        <TableCell className="py-2 px-1">
                                        <Select
                                            value={course.grade}
                                            onValueChange={(value) => updateCourseS1(course.id, "grade", value)}
                                        >
                                            <SelectTrigger className="h-9"><SelectValue placeholder="Pilih" /></SelectTrigger>
                                            <SelectContent>
                                            {gradeOptions.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        </TableCell>
                                        <TableCell className="py-2 px-1 text-center">
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="text-red-500 h-8 w-8"
                                            onClick={() => setCoursesS1(coursesS1.filter(c => c.id !== course.id))}
                                            disabled={coursesS1.length === 1}
                                        >
                                            <Trash2 className="w-4 h-4"/>
                                        </Button>
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                                </Table>
                                <Button 
                                className="w-full mt-2" 
                                onClick={() => setCoursesS1([...coursesS1, {id: Date.now().toString(), name: "", credits: 0, grade: ""}])} 
                                variant="outline"
                                >
                                <Plus className="h-4 w-4 mr-2"/> Tambah Matkul Semester 1
                                </Button>
                            </div>
                            </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="h-5 w-5"/>
                                Mata Kuliah Semester 2
                        </CardTitle>
                        <CardDescription>Masukan nilai yang diperoleh</CardDescription>
                    </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-b">
                                    <TableHead className="w-[70%]">Mata Kuliah</TableHead>
                                    <TableHead className="w-[10%]">SKS</TableHead>
                                    <TableHead className="w-[13%]">Nilai</TableHead>
                                    <TableHead className="w-[7%]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses.map((course) => (
                                    <TableRow key={course.id} className="border-b last:border-0">
                                        <TableCell className="py-2 px-1">
                                        <Input
                                            value={course.name}
                                            placeholder="Nama Mata Kuliah"
                                            onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                                            className="h-9"
                                        />
                                        </TableCell>
                                        <TableCell className="py-2 px-1">
                                        <Input
                                            type="number"
                                            value={course.credits === 0 ? "" : course.credits}
                                            onChange={(e) => updateCourse(course.id, "credits", parseInt(e.target.value) || 0)}
                                            className="h-9"
                                        />
                                        </TableCell>
                                        <TableCell className="py-2 px-1">
                                        <Select
                                            value={course.grade}
                                            onValueChange={(value) => updateCourse(course.id, "grade", value)}
                                        >
                                            <SelectTrigger className="h-9"><SelectValue placeholder="Pilih" /></SelectTrigger>
                                            <SelectContent>
                                            {gradeOptions.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        </TableCell>
                                        <TableCell className="py-2 px-1 text-center">
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="text-red-500 h-8 w-8"
                                            onClick={() => removeCourse(course.id)}
                                            disabled={courses.length === 1}
                                        >
                                            <Trash2 className="w-4 h-4"/>
                                        </Button>
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                                </Table>
                                <Button className="w-full mt-2" onClick={addCourse} variant="outline">
                                <Plus className="h-4 w-4 mr-2"/> Tambah Matkul Semester 2
                                </Button>
                            </div>
                            </CardContent>
                </Card>
                            <Card className="md:col-span-2">
                                <CardHeader>
                                    <CardTitle>Ringkasan Hasil Perhitungan</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        
                                        {/* Box 1: Semester 1 */}
                                        <div className="p-4 bg-muted rounded-lg border">
                                            <p className="text-sm font-medium">IP Semester 1</p>
                                            <p className={`text-2xl font-bold ${getGPAColor(gpaS1)}`}>{gpaS1.toFixed(2)}</p>
                                            <Badge variant="outline" className="mt-1">{sksS1} SKS</Badge>
                                        </div>

                                        {/* Box 2: Semester 2 */}
                                        <div className="p-4 bg-muted rounded-lg border">
                                            <p className="text-sm font-medium">IP Semester 2</p>
                                            <p className={`text-2xl font-bold ${getGPAColor(gpaS2)}`}>{gpaS2.toFixed(2)}</p>
                                            <Badge variant="outline" className="mt-1">{sksS2} SKS</Badge>
                                        </div>

                                        {/* Box 3: TOTAL (IPK) */}
                                        <div className="p-4 bg-primary/13 dark:bg-primary/20 rounded-lg border border-primary/30">
                                            <p className="text-sm font-bold text-primary">IP Kumulatif (Semester 1 + Semester 2)</p>
                                            <p className={`text-3xl font-black ${getGPAColor(cumulativeGPA)}`}>
                                                {cumulativeGPA.toFixed(2)}
                                            </p>
                                            <Badge variant="outline" className="mt-1">{sksS2} SKS</Badge>
                                        </div>

                                    </div>

                                    <div className="mt-6 pt-6 border-t">
                                        <h4 className="mb-3 text-sm font-semibold">Skala Penilaian</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {Object.entries(gradePoints).map(([grade, points]) => (
                                                <div key={grade} className="flex gap-2 px-3 py-1 bg-white/50 dark:bg-black/20 rounded-full text-xs border">
                                                    <span className="font-bold">{grade}</span>
                                                    <span>{points.toFixed(1)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
            </div>
    )
}
