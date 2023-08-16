import { useState } from "react";

const users = [
    {
      id: 1,
      name: "abc",
      posts: [
        {
          title: "lorem ipsum 1",
          likedislike: {
            likes: 5,
            dislikes: 2,
          },
        },
        {
          title: "lorem ipsum 1",
          likedislike: {
            likes: 8,
            dislikes: 2,
          },
        },
      ],
    },
    {
      id: 2,
      name: "sdaf",
      posts: [
        {
          title: "lorem ipsum 3",
          likedislike: {
            likes: 10,
            dislikes: 5,
          },
        },
        {
          title: "lorem ipsum 3",
          likedislike: {
            likes: 10,
            dislikes: 5,
          },
        },
        {
          title: "lorem ipsum",
          likedislike: {
            likes: 15,
            dislikes: 2,
          },
        },
        {
          title: "lorem ipsum",
          likedislike: {
            likes: 15,
            dislikes: 2,
          },
        },
      ],
    },
    {
      id: 1,
      name: "abc",
      posts: [
        {
          title: "lorem ipsum 1",
          likedislike: {
            likes: 5,
            dislikes: 2,
          },
        },
        {
          title: "lorem ipsum 1",
          likedislike: {
            likes: 8,
            dislikes: 2,
          },
        },
      ],
    },
    {
      id: 2,
      name: "sdaf",
      posts: [
        {
          title: "lorem ipsum 3",
          likedislike: {
            likes: 10,
            dislikes: 5,
          },
        },
        {
          title: "lorem ipsum 3",
          likedislike: {
            likes: 10,
            dislikes: 5,
          },
        },
        {
          title: "lorem ipsum",
          likedislike: {
            likes: 15,
            dislikes: 2,
          },
        },
        {
          title: "lorem ipsum",
          likedislike: {
            likes: 15,
            dislikes: 2,
          },
        },
      ],
    },
  ];
  // display number of posts
  // display total likes
  // display total dislikes

  const FacebookMini = () => {
    const [data, setData] = useState(users)
    return(
        <>
        <h1>Render Page</h1>
        {console.log(data)}
        {data.map((elem)=>{

          return (<>
          <p>Total Post :{elem.posts.length}</p>
         <p>Total Likes :{elem.posts.reduce((acc,curr)=>acc+curr.likedislike.dislikes,0)}</p>
          <p>Total Dislikes :{elem.posts.reduce((acc,curr)=>acc+curr.likedislike.likes,0)}</p></>)
        })}
        </>
    )
  }
  export default FacebookMini;