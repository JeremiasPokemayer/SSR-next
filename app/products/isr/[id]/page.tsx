import MainLayout from "@/components/main-layout";

async function getDataById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getDataById(id);
  return <MainLayout>{JSON.stringify(data)}</MainLayout>;
}
