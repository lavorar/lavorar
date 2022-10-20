import Card from "../components/elements/Card";
import Layout from "../components/Layouts/mainLayout";
import { useFetchUser, useUser } from "../lib/authContext";

export default function Home() {
  const { user, loading } = useFetchUser();
  console.log(user)
  return (
    <Layout user={user} >
      <div className="flex flex-col  items-center w-full p-1 text-black">
        {/* <HomeSearchBar /> */}
        <div className="mt-10 flex flex-wrap justify-evenly duration-300 gap-4 lg:gap-8 w-full lg:px-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="hidden xl:block">
            <Card />
          </div>
          <div className="hidden xl:block">
            <Card />
          </div>

        </div>
      </div>
    </Layout>
  )
}
