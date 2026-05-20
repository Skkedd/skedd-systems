import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user?.email) {
  redirect("/api/auth/signin?callbackUrl=/admin");
  }  

  if (session.user.email?.toLowerCase() !== "skedd@skeddsystems.com") {
    redirect("/");
  } 

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Skedd Command Center</h1>
        <p className="text-gray-400 mb-10">
          Logged in as {session?.user?.email}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://mail.google.com"
            target="_blank"
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5"
          >
            Gmail
          </a>

          <a
            href="https://github.com/Skkedd"
            target="_blank"
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5"
          >
            GitHub
          </a>

          <a
            href="https://vercel.com"
            target="_blank"
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5"
          >
            Vercel
          </a>

          <a
            href="https://supabase.com"
            target="_blank"
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5"
          >
            Supabase
          </a>

          <a
            href="https://dash.cloudflare.com"
            target="_blank"
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5"
          >
            Cloudflare
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5"
          >
            Back to Skedd Systems
          </a>
        </div>
      </div>
    </main>
  );
}