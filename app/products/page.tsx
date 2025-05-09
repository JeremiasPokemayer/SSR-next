import MainLayout from "@/components/main-layout";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  return res.json();
}

export default async function ProductPage() {
  const data = await getData();
  return (
    <MainLayout>
      <h1>PRODUCTOS:</h1>
      {JSON.stringify(data)}
    </MainLayout>
  );
}
