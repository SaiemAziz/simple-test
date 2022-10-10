import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import ErrorPage from '../layout/ErrorPage'
import Home from '../components/Home'
import Quiz from '../components/Quiz'
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
                path: 'topic/:id',
                element: <Quiz></Quiz>,
                loader: async ({params})=> await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
])