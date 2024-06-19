"use client"
import React, {useEffect, useMemo, useRef, useState} from 'react'

const Sqaures = ({data}: {data: number[][]}) => {
    const [colors, setColors] = useState<String[]>([]);
    const [process, setProcess] = useState(false);
    const intervalRef = useRef<any>(null);
    const ones = useRef<number>(0);
    const rows = data[0].length;

    const countOnes = () => {
        ones.current = 0;
        data.forEach((row: number[]) => {
            row.forEach((col: number) => {
                if (col === 1) ones.current += 1;
            })
        })

    }

    useEffect(() => {
        countOnes();
    }, []);

    useEffect(() => {
        if (!process) return;
        if (colors.length === 0 && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setProcess(false);
            return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            const newColors = colors.slice(1);
            setColors(newColors);
        }, 1000); // Interval of 1 second
    }, [colors]);

    const changeColor = (key: string) => {
        if (colors.includes(key) || process) return;
        setColors([...colors, key]);
        if (colors.length === ones.current - 1) setProcess(true);
    }


    return (
        <div className={'w-120 h-120 grid gap-4 grid-cols-' + rows} >
            {
                data.map((row: number[], rowIndex: number) =>
                (

                    row.map((col: number, colIndex: number) => (

                        col === 1 ?
                            <div className={colors.includes(rowIndex + "-" + colIndex) ? "w-20 h-20 col-span-1 bg-green-500" : "w-20 h-20 bg-black col-span-1"}
                                key={rowIndex + "-" + colIndex} onClick={() => changeColor(rowIndex + "-" + colIndex)} >
                            </div>
                            :
                            <div className="w-20 h-20 col-span-1 border-none" key={rowIndex + "-" + colIndex} >
                            </div>
                    )
                    )
                )
                )
            }
        </div >
    )
}

export default Sqaures