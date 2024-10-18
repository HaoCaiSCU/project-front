import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const links = [
        { label: "Home", path: "Home" },
        { label: "Modules", path: "Modules" },
        { label: "Piazza", path: "Piazza" },
        { label: "Zoom", path: "Zoom" },
        { label: "Assignments", path: "Assignments" },
        { label: "Quizzes", path: "Quizzes" },
        { label: "People", path: "People" }
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link.path}
                    to={`/Kanbas/Courses/${cid}/${link.path}`}  // Dynamic course ID and path
                    id={`wd-course-${link.path.toLowerCase()}-link`}
                    className={`list-group-item border border-0 ${pathname.includes(link.path) ? "active" : "text-danger"
                        }`}  // Highlight the active link
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
