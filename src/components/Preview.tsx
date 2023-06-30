interface currentImageURL {
  URL: string | undefined
}
const Preview = ({ URL }: currentImageURL) => {
  return (
    <>
      <div className="list flex flex-row bg-gray-500 h-64 p-6">
        <img
          draggable="false"
          src={URL}
          className="border-solid border-4 shadow-sm rounded-md w-60 h-fit bg-cover"
        ></img>
        {URL ? (
          <a
            className="text-ellipsis overflow-hidden whitespace-nowrap text-blue-600 visited:no-underline font-bold h-fit"
            href={URL}
            target="_blank"
          >
            {URL}
          </a>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Preview
