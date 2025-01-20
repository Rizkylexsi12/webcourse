import CardCourses from "./card-courses";

function StudentPage() {
    return (
      <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
        <CardCourses />
        <CardCourses id={2} imgUrl="th-2" nameCourse="HTMX JavaScript 2020" category="Marketing"/>
        <CardCourses id={3} imgUrl="th-3" nameCourse="Mastering React" category="Data Science"/>
        <CardCourses id={4} imgUrl="th-2" nameCourse="Responsive Design Triclorem Lorem, ipsum dolor." category="Marketing"/>
        <CardCourses id={5} imgUrl="th-3" nameCourse="Company Profile Multilorem Lorem, ipsum dolor." category="Data Science"/>
      </section>
    );
}

export default StudentPage;