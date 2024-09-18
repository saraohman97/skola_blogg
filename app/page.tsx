import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import EmptyState from "@/components/empty-state";
import getPosts from "@/actions/getPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <div className="bg-[#FEFEFE] p-4 lg:p-10">
        <div className="flex flex-col-reverse justify-end relative lg:flex-row gap-10 lg:mx-20">
          <Image
            alt=""
            src="/devil2.png"
            width={500}
            height={500}
            className="absolute -top-20 -left-56 h-32 object-contain max-lg:hidden z-40"
          />
          <div className="text-white h-28 w-28 text-xs font-bold rounded-full p-2 absolute -top-14 -left-8 flex items-center z-40 justify-center text-center max-lg:hidden">
            Här börjar <br />
            resan
          </div>

          {/* MAINBAR */}
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 w-fit">
              {posts.map((post) => (
                <div key={post.id} className="pb-10 relative">
                    <Image
                      src={post.imageSrc}
                      alt=""
                      height={1000}
                      width={1000}
                      className="object-cover max-lg:h-20 min-h-40 min-w-40 bg-neutral-100"
                    />
                  <div className="font-bold absolute">{post.title}</div>
                  {/* <div className="text-xs absolute right-0">{post.createdAt}</div> */}
                </div>
              ))}
            </div>
          )}

          {/* SIDEBAR */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
