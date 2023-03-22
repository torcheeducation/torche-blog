import { getSession, signOut } from "next-auth/react";

export default function Admin({ session }) {
  if (session) {
    console.log("Session ada")
  }

  return (
    <div>
      <h1>Check!</h1>
      <button onClick={signOut}>Logout ?</button>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
