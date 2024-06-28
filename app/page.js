import CategoryComponent from "@/components/itemCard"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-4 md:p-24 gap-6">
      
      <CategoryComponent title='Deep Conversations' description='Carefully curated for cultivating friendships.'/>

      <CategoryComponent title='Deep Conversations' description='Carefully curated for cultivating friendships.'/>
    </main>
  );
}
