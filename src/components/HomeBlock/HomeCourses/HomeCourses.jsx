import React, { forwardRef } from 'react'
import "./HomeCourses.css";
import HomeCoursesDescription from './HomeCoursesDescription/HomeCoursesDescription';
import { useTranslation } from 'react-i18next';

const HomeCourses = ({}, ref) => {
  const {t} = useTranslation()

  const coursesData = [
    {
      id : 1,
      title : t("Courses.CoursesData.Gaming.title"),
      description : t("Courses.CoursesData.Gaming.body"),
    },
    {
      id : 2,
      title : t("Courses.CoursesData.Web.title"),
      description : t("Courses.CoursesData.Web.body"),
    },
    {
      id : 3,
      title : t("Courses.CoursesData.React.title"),
      description : t("Courses.CoursesData.React.body"),
    },
    {
      id : 4,
      title : t("Courses.CoursesData.English.title"),
      description : t("Courses.CoursesData.English.body"),
    },
    {
      id : 5,
      title : t("Courses.CoursesData.Design.title"),
      description : t("Courses.CoursesData.Design.body"),
    },
    {
      id : 6,
      title : t("Courses.CoursesData.Seo.title"),
      description : t("Courses.CoursesData.Seo.body"),
    },
    {
      id : 7,
      title : t("Courses.CoursesData.MsOffice.title"),
      description : t("Courses.CoursesData.MsOffice.body"),
    }
  ]
  

  return (
    <div className='home-courses' ref={ref}>
      <h1 className='home-courses-title'>{t("Courses.title")}</h1>
      <p className='home-courses-subtitle'>{t("Courses.subtitle")}</p>
        {
          coursesData.map(courses => <HomeCoursesDescription key={courses.id} courses={courses}/>)
        }
    </div>
  )
}

export default forwardRef(HomeCourses)