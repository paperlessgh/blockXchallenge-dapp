// components
import SearchFilter from "./search-filter";
import CategoryFilter from "./category-filter";
import Challenges from "./challenges";

export default function Home() {
  return (
    <div className="relative">
      <div className="px-4 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-center xs:flex-row md:flex-nowrap">
        {/* search filter */}
        <div tabIndex={-1} className="w-full md:max-w-[420px]">
          <SearchFilter />
        </div>
        {/* category filter */}
        <CategoryFilter />
        {/* items count */}
        <div className="mt-2 whitespace-nowrap text-right text-skin-text xs:ml-auto xs:mt-0">
          29K space(s)
        </div>
      </div>
      {/* items */}
      <Challenges />
    </div>
  );
}
