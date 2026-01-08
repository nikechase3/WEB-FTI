"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { materiList1, departments } from "@/components/hooks/data";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function libraryPage() {
    const router = useRouter();
    const [selectedDepartment, setSelectedDepartment] = useState<string>("")
    const selectedDeptData = departments.find((dept) => dept.id === selectedDepartment)

    return(
        <>
        
            <div className="hidden md:block min-h-screen bg-linear-to-t from-sky-400 to-stone=200">
                <section className="py-20 ">
                    <div className="text-center">
                        <h1 className="font-bold text-4xl md:text-6xl">Materi</h1>
                    </div>

                    <div className="grid grid-col-1 md:grid-cols-2 relative gap-6 px-16 py-8 items-center">
                        <div className="w-full">
                            <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/0oPyDVNdgcPFAWmOYSK7O1?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                            </iframe>
                        </div>
                        <div className="max-w-2xl text-justify md:text-start pt-4 lg:text-lg ">
                            <p>Menciptakan suasana belajar yang lebih fokus dan produktif, kami menyediakan playlist bertema Deep Focus Study.
                            Musik yang dipilih dengan nuansa tenang dan ambient ini membantu mengurangi distraksi dan meningkatkan konsentrasi saat kamu membaca, mengerjakan tugas, atau mempersiapkan ujian.
                            Putar langsung dari halaman ini dan rasakan perbedaannya dalam proses belajarmu. Cocok didengarkan kapan saja, terutama saat kamu butuh fokus ekstra.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Silabus Preview</h1>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 px-16 py-8 gap-6">
                        <Card>
                            <div className="text-center font-bold">
                                <CardHeader>
                                    Semester 1
                                </CardHeader>
                            </div>

                            <div className="space-y-6">
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <Table className="min-w-full">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="font-semibold">Mata Kuliah</TableHead>
                                                    <TableHead className="w-22">SKS</TableHead>
                                                </TableRow>
                                            </TableHeader>

                                            <TableBody>
                                                {materiList1.map((materi) => (
                                                    <TableRow
                                                    key={materi.id}>
                                                        <TableCell>
                                                            {materi.name}
                                                        </TableCell>
                                                        <TableCell>
                                                            {materi.sks}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </CardContent>
                                <div className="px-4">

                                    <Button className="w-full px-4 bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]"
                                    onClick={() => router.push("/library/semester1")}>
                                        Mulai Belajar
                                    </Button>

                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-center font-bold">
                                <CardHeader>
                                    Semester 2
                                </CardHeader>
                            </div>

                            <div className="space-y-6">
                                <CardContent className="px-6 pb-6">
                                    <div className="mb-4">
                                        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                                                <SelectTrigger className="w-full"> 
                                                    <SelectValue placeholder="Pilih Jurusan"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {departments.map((dept) => (
                                                        <SelectItem
                                                        key={dept.id}
                                                        value={dept.id}>
                                                            {dept.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                        </Select>
                                    </div>
                                
                                    {selectedDeptData ? (
                                        <>
                                        
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Mata Kuliah</TableHead>
                                                <TableHead className="w-22">SKS</TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {selectedDeptData.courses.map((materi) => (
                                                <TableRow
                                                key={materi.id}>
                                                    <TableCell>
                                                        {materi.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {materi.sks}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    <div className="py-2"> 
                                        <Button className="w-full px-4 bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]"
                                        onClick={() => router.push("/library/semester2")}>
                                            Mulai Belajar
                                        </Button>
                                    </div>
                                        </>
                                    ) : (
                                        <div className="text-center py-12 text-gray-500">
                                            <p className="text-lg">Silakan pilih jurusan untuk melihat mata kuliah</p>
                                        </div>
                                    )}
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </section>  
            </div>

            {/*Mobile View */}

            <div className="block md:hidden min-h-screen bg-linear-to-t from-sky-400">
            <section className="py-20 ">
                    <div className="text-center">
                        <h1 className="font-bold text-4xl md:text-6xl">Materi</h1>
                    </div>

                    <div className="grid grid-col-1 md:grid-cols-2 relative gap-6 px-16 py-8 items-center">
                        <div className="w-full">
                            <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/0oPyDVNdgcPFAWmOYSK7O1?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                            </iframe>
                        </div>
                        <div className="max-w-2xl text-justify md:text-start pt-4 lg:text-lg ">
                            <p>Menciptakan suasana belajar yang lebih fokus dan produktif, kami menyediakan playlist bertema Deep Focus Study.
                            Musik yang dipilih dengan nuansa tenang dan ambient ini membantu mengurangi distraksi dan meningkatkan konsentrasi saat kamu membaca, mengerjakan tugas, atau mempersiapkan ujian.
                            Putar langsung dari halaman ini dan rasakan perbedaannya dalam proses belajarmu. Cocok didengarkan kapan saja, terutama saat kamu butuh fokus ekstra.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Silabus Preview</h1>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 px-16 py-8 gap-6">
                        <Card>
                            <div className="text-center font-bold">
                                <CardHeader>
                                    Semester 1
                                </CardHeader>
                            </div>

                            <div className="space-y-6">
                                <CardContent>
                                    <div className="space-y-4">
                                    {materiList1.map((materi) => (
                                        <div
                                        key={materi.id}
                                        className="flex justify-between items-center px-4 py-2 bg-white rounded shadow text-sm border dark:bg-neutral-900"
                                        >
                                        <span className="font-medium">{materi.name}</span>
                                        <span className="text-gray-600 dark:text-white">{materi.sks} SKS</span>
                                        </div>
                                    ))}
                                    </div>
                                </CardContent>
                                <div className="px-4">

                                    <Button className="w-full px-8 bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]"
                                    onClick={() => router.push("/library/semester1")}>
                                        Mulai Belajar
                                    </Button>

                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="text-center font-bold">
                                <CardHeader>
                                    Semester 2
                                </CardHeader>
                            </div>

                            <div className="space-y-6">
                                <CardContent>
                                <div className="mb-6 md:hidden block">
                                        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                                                <SelectTrigger className="w-full"> 
                                                    <SelectValue placeholder="Pilih Jurusan"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {departments.map((dept) => (
                                                        <SelectItem
                                                        key={dept.id}
                                                        value={dept.id}>
                                                            {dept.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                        </Select>
                                </div>

                                    {selectedDeptData ? (
                                        <>

                                            <div className="space-y-4">
                                            {selectedDeptData.courses.map((materi) => (
                                                <div
                                                key={materi.id}
                                                className="flex justify-between items-center px-4 py-2 bg-white rounded shadow text-sm border dark:bg-neutral-900"
                                                >
                                                <span className="font-medium">{materi.name}</span>
                                                <span className="text-gray-600 dark:text-white">{materi.sks} SKS</span>
                                                </div>
                                            ))}
                                            </div>
                                            <div className="py-4">

                                                <Button className="w-full px-4 bg-[#164b82] hover:bg-[#638ECB] dark:bg-[#638ECB] dark:hover:bg-[#164b82]"
                                                onClick={() => router.push("/library/semester2")}>
                                                    Mulai Belajar
                                                </Button>

                                            </div>

                                        
                                        </>

                                    ) : (
                                        <div className="text-center py-12 text-gray-500">
                                            <p className="text-lg">Silakan pilih jurusan untuk melihat mata kuliah</p>
                                        </div>
                                    )}
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </section>  
            </div>
        </>
    )
}