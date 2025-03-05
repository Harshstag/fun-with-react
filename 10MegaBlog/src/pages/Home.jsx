import React, { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useEffect([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="py-8">
        <Container>
          <h1 className="text-3xl font-bold text-center">No posts found</h1>
        </Container>
      </div>
    );
  }
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            return (
              <div key={post.$id} className="py-2 w-1/4">
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
