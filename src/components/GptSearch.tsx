import GptSearchBar from "./GptSearchBar"

type Props = {}

export default function GptSearch({}: Props) {
  return (
    <>
      <div className="bg-black h-screen w-screen absolute top-0 left-0">
        <GptSearchBar/>
      </div>
    </>
  )
}