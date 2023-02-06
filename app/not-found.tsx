export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Not Found
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Could not find requested resource
        </p>
      </div>
    </div>
  )
}
