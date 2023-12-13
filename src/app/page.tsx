import InputForm from '@/components/forms/InputForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-20">
      <div>
        <h1>Home Page</h1>
        <InputForm />
      </div>
    </main>
  )
}
