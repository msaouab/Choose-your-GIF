import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const ImgGif = ({ source, alt }: { source: string; alt?: string }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <Stack>
          <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
        </Stack>
      )}
      <img
        src={source}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: loading ? "none" : "block" }}
      />
    </>
  );
};

export default ImgGif;
