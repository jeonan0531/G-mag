import React from "react";
import Header from "./pages/Header.jsx";
import Title from "./pages/Title.jsx";
import Content from "./pages/Content.jsx";
import Footer from "./pages/Footer.jsx";
import HomePage from "./pages/Home.jsx";
import RootLayout from "./pages/Root.jsx";
import AboutPage from "./pages/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation.jsx";
import ExchangePage from "./pages/Exchange.jsx";
import MemoirPage from "./pages/memoir.jsx";
import PostPage from "./pages/Post.jsx";
import PostListPage from "./pages/PostList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/exchange", element: <ExchangePage /> },
      { path: "/memoir", element: <MemoirPage /> },
      { path: "/post/:name/:id", element: <PostPage /> },
      { path: "/post", element: <PostPage /> },
      { path: "/postlist", element: <PostListPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
