/* type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise

    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        )
    })

    return content
} */
type Props = {
    promise: Promise<Post[]>;
  };
  
  export default async function UserPosts({ promise }: Props) {
    try {
      const posts = await promise;
  
      if (!Array.isArray(posts)) {
        // Handle the case where the promise didn't resolve to an array
        return <div>Error: Posts are not available.</div>;
      }
  
      const content = posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
          </article>
        );
      });
  
      return <div>{content}</div>;
    } catch (error) {
      // Handle any errors that occur while resolving the promise
      return <div>Error</div>;
    }
  }
  