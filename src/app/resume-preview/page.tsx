'use client'

import dynamic from 'next/dynamic'
import { ResumeDocument } from '@/lib/generate-resume-pdf'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  { ssr: false }
)

export default function ResumePreviewPage() {
  return (
    <PDFViewer style={{ width: '100vw', height: '100vh', border: 'none' }}>
      <ResumeDocument />
    </PDFViewer>
  )
}
