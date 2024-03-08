import { useState } from 'react';
import Header from './components/header/Header'
import Posts from './components/posts/Posts'
import NewPosts from './components/new-posts/NewPosts'
import './App.css'

const App = () => {
  const [reload, setReload] = useState(false);

  return (
    <>
    <Header />
    <Posts reload={reload}/>
    <NewPosts setReload={setReload}/>
    </>
  )
}

export default App

// import { useState } from 'react';
// import Tasks from './components/tasks/Tasks';
// import CreateTask from './components/create-task/CreateTask';
// import './App.css'

// const App = () => {
//   const [reload, setReload] = useState(false);

//   return (
//     <>
//       <CreateTask setReload={setReload} />
//       <Tasks reload={reload} />
//     </>
//   )
// }

// export default App