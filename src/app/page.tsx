import { ButtonLink } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex h-screen items-center bg-white w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16 flex justify-center flex-col items-center gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Feedback Board</span>
        </h2>
        <p>A minimalistic feedback & voting app</p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <ButtonLink href="/dashboard"> Go to Dashboard</ButtonLink>
          </div>
          <div className="ml-3 inline-flex">
            <ButtonLink
              variant="outline"
              href="https://github.com/rasekdk/feedback-board"
              target="_blank"
            >
              <FaGithub />
              Github Repo
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
