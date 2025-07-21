import { client } from "@/libs/client";

export async function generateStaticParams() {
  const data = await client.get({ endpoint: "blog" });
  return data.contents.map((content: any) => ({
    id: content.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  try {
    const data = await client.get({ endpoint: "blog", contentId: params.id });

    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
          <article className="w-full">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-600 mb-6">{new Date(data.publishedAt).toLocaleDateString()}</p>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: data.body }}
            />
          </article>
          <a 
            href="/" 
            className="text-blue-500 hover:underline"
          >
            ← Back to Blog List
          </a>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">Blog Post</h1>
          <p>Error loading blog post. Please check your API configuration.</p>
          <a href="/" className="text-blue-500 hover:underline">
            ← Back to Blog List
          </a>
        </main>
      </div>
    );
  }
} 