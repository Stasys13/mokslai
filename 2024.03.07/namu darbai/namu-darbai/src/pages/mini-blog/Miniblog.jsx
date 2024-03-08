import { useState } from 'react';
import Header from '../../mini-blog/components/header/Header'
import Posts from '../../mini-blog/components/posts/Posts'
import NewPosts from '../../mini-blog/components/new-posts/NewPosts'
import './App.css'

const Miniblog = () => {
  const [reload, setReload] = useState(false);

  return (
    <>
    <Header />
    <Posts reload={reload}/>
    <NewPosts setReload={setReload}/>
    </>
  )
}

export default Miniblog

