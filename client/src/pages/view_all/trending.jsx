import { Link } from "react-router-dom";

function Trending({ title, to }) {
  return (
    <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
      <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
        {title}
      </h3>

      <Link
        to={to}
        className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
      >
        View all
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export default Trending;