import { Box } from "@mantine/core";
import './styles/globalReach.css';
import GlobalReachBox from "./GlobalReachBox";
import { GlobalReachData } from "../../../data/componentData";

function GlobalReach() {
  return (
    <>
      <Box className="globalReachCon flex flex-col gap-12 justify-center items-center">
        <h1 className="text-white font-extrabold text-5xl text-center font-mono">
          We help people all over the world!
        </h1>

        <Box className="flex flex-wrap justify-center gap-10 w-full">
          {
            GlobalReachData.map(data =>
              <GlobalReachBox details={data.details} name={data.name} value={data.value} />
            )
          }
        </Box>
      </Box>
    </>
  )
}

export default GlobalReach
