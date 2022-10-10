import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'home',
                element: <p>this is home</p>
            }
        ]
    }
])