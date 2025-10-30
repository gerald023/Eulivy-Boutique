import { Box } from "@mantine/core"


function GlobalReachBox(data: {value: string, name: string, details: string}) {
  return (
    <>
      <Box className="flex flex-col gap-2 p-3 border-white justify-center items-center rounded-xl w-52 h-52 border-2">
        <p className="text-white text-3xl font-extrabold ">{data.value}</p>
        <p className="text-white text-lg font-bold">{data.name}</p>
        <p className="text-white text-sm font-semibold text-center mt-4">{data.details}</p>
      </Box>
    </>
  )
}

export default GlobalReachBox
