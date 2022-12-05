import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";
function Video({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start">
      {videos.map((item, idx) => {
        return (
          <Box key={idx} sx={{ margin: "4px" }}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Video;
