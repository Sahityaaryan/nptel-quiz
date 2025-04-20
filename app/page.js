// import { getUserSession } from '@/lib/session'
import { getUserSession } from "./lib/session";
import LandingPage from "@/components/LandingPage";
import Nav from "@/components/Nav";
// import { seedSubs } from "./lib/actions";

export default async function Home() {
  // const seed = await seedSubs();

  // console.log("seeded data: ", seed);
  // const user = await getUserSession()
  return (
    <main className="">
      <Nav />

      <LandingPage />
    </main>
  );
}
