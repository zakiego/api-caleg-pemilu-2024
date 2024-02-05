import { dbClient } from "@/db";

export default async function Home() {
  const data = await dbClient.query.dpdCalon.findFirst();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
