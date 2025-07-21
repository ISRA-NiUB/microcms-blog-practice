import Image from "next/image";
import { client } from "@/libs/client";

export default async function Home() {
  try {
    console.log('API Key:', process.env.API_KEY ? 'Set' : 'Not set');
    console.log('Service Domain:', 'rsz3ipo0sd');
    
        const data = await client.get({ endpoint: "blog" });
    console.log('API Response:', data);
    
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">Blog Posts</h1>
          <div className="grid gap-4">
            {data.contents.map((blog: any) => (
              <article key={blog.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600">{blog.body}</p>
                <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                  Read more
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // 一時的なモックデータを表示
    const mockData = {
      contents: [
        {
          id: '1',
          title: 'Sample Blog Post 1',
          body: 'This is a sample blog post content.',
          publishedAt: '2024-01-01'
        },
        {
          id: '2',
          title: 'Sample Blog Post 2',
          body: 'This is another sample blog post content.',
          publishedAt: '2024-01-02'
        }
      ]
    };
    
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">Blog Posts (Mock Data)</h1>
          <p className="text-red-500">API Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
          <div className="grid gap-4">
            {mockData.contents.map((blog: any) => (
              <article key={blog.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600">{blog.body}</p>
                <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                  Read more
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
    );
  }
}
