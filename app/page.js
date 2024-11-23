import Categories from "@/components/sharedLayout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  md:p-24 gap-6 bg-white">
      <Categories/>
    </main>
  );
}

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registered successfully.");
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  });
}

