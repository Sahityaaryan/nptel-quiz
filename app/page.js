// import { getUserSession } from '@/lib/session'
import { getUserSession } from "./lib/session";
import LandingPage from "@/components/LandingPage";
import Nav from "@/components/Nav";
// import { seedSubs } from "./lib/actions";
import { seedCourse } from "./lib/actions";
export default async function Home() {
  // const seed = await seedCourse();

  // console.log("seeded data: ", seed);
  // const user = await getUserSession()
  return (
    <main className="">
      <Nav />
      <LandingPage />
    </main>
  );
}
