import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
function SearchFeed() {
  const { searchTerm } = useParams();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideo(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Video videos={video} />
    </Box>
  );
}

export default SearchFeed;
