"use client";
import { useParams } from "next/navigation";
import semesterIPage from "@/components/Section/semester1";
import SemesterIPage from "@/components/Section/semester1";
import Semester2Page from "@/components/Section/semester2";

export default function semesterRoute() {
    const {semester} = useParams();

    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400">
            {semester === "semester1" ? (
                <SemesterIPage/>
            ) : semester === "semester2" ? (
                <Semester2Page/>
            ) : 
            (
                <div>
                    <p>
                        Halaman Tidak Ditemukan
                    </p>
                </div>
            )}
        </div>
    )
}