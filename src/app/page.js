import ObjectDetection from '@/components/object-detection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen bg-zinc-900 flex-col items-center p-8 text-white">
      <h1 className="gradient gradient-title text-3xl md:text-6xl lg:text-8xl tracking-tighter font-bold capitalize  md:px-6 text-center">
        Thief Detection Alarm
      </h1>
      <ObjectDetection />
    </main>
  )
}
