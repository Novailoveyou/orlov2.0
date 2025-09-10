'use client'
import 'client-only'
import { useEffect, useState } from 'react'
import { Time } from './time'

type YearProps = {
  year: number
}

/**
 * @description A component to display the current year, updating automatically
 */
export function Year({ year: defaultYear }: YearProps) {
  const [year, setYear] = useState(defaultYear)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return <Time dateTime={`${year}`}>{year}</Time>
}
