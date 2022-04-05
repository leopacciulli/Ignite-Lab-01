import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser()

  return (
    <div>HI</div>
  )
}

export const getServerSideProps = withPageAuthRequired();