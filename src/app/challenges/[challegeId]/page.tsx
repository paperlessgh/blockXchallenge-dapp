// components
import Sidebar from "./sidebar";
import Content from "./content";

export default function ChallengeDetailPage({
  params: { challengeId },
}: {
  params: { challengeId: string };
}) {
  return (
    <div className="relative">
      <div className="px-4 py-5 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-start xs:flex-row md:flex-nowrap">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
