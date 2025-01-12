import { createBrowserRouter } from "react-router-dom"
import ManagerhomePage from "../pages/Manager/home"
import Memberhome from "../pages/Member"
import SignIn from "../pages/SignIn"
import Signup from "../pages/SignUp"
import Pricing from "../pages/Pricing"
import SuccessPayment from "../pages/SuccessPayment"
import LayoutDashboard from "../components/layout"
import Courses from "../pages/Manager/courses"
import CreateCourse from "../pages/Manager/create-course"
import CourseDetail from "../pages/Manager/course-detail"
import CreateContentCourse from "../pages/Manager/create-content-course"

const router = createBrowserRouter([
    {
      path: '/',
      element: <ManagerhomePage />
    },
    {
      path: '/member',
      element: <Memberhome />
    },
    {
      path: '/manager/signin',
      element: <SignIn />
    },
    {
      path: '/manager/signup',
      element: <Signup />
    },
    {
      path: '/manager',
      element: <LayoutDashboard />,
      children: [
        {
          index: true,
          element: <ManagerhomePage />
        },
        {
          path: '/manager/courses',
          element: <Courses />
        },
        {
          path: '/manager/courses/create-course',
          element: <CreateCourse />
        },
        {
          path: '/manager/courses/:id',
          element: <CourseDetail />
        },
        {
          path: '/manager/courses/:id/create-content',
          element: <CreateContentCourse />
        },
      ]
    },
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/success-payment',
      element: <SuccessPayment />
    }
  ])

export default router