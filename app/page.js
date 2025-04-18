// import { getUserSession } from '@/lib/session'
import { getUserSession } from "./lib/session"
import LandingPage from "@/components/LandingPage"
import Nav from "@/components/Nav"

export default async function Home() {
  // const user = await getUserSession()
  return( <main className="">

    <Nav/>

    <LandingPage/>

  </main>)
}