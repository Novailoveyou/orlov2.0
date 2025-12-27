'use client'

import { useReportWebVitals } from 'next/web-vitals'

// TODO: finish web vitals https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals
const handleWebVitals = (
  metric: Parameters<Parameters<typeof useReportWebVitals>[0]>[0],
) => {
  switch (metric.name) {
    case 'FCP': {
      // handle FCP results
      break
    }
    case 'LCP': {
      // handle LCP results
      break
    }
    default:
    // ...
  }
}

export function WebVitals({ appName }: { appName?: string }) {
  useReportWebVitals(handleWebVitals)

  return null
}
