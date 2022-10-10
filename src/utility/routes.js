import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import ErrorPage from '../layout/ErrorPage'
import Home from '../components/Home'
import Quiz from '../components/Quiz'
import Statistics from '../components/Statistics'
import Blog from '../components/Blog'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'topic/:id',
                element: <Quiz></Quiz>,
                loader: async ({params})=> await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
])