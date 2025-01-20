import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardCourses({
    id = 1,
    imgUrl = 'th-1',
    nameCourse = 'Mastering React TypeScript 7 Website Development',
    category = 'Programming'
}) {
    return (
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
              <img src={`/assets/images/thumbnails/${imgUrl}.png`} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
              <Link to={`/student/detail-course/${id}`} className="font-bold text-xl leading-[30px] line-clamp-1">{nameCourse}</Link>
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                <p className="text-[#838C9D]">{category}</p>
              </div>
            </div>
        </div>
    );
}

CardCourses.propTypes = {
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    nameCourse: PropTypes.string,
    category: PropTypes.string
}

export default CardCourses;