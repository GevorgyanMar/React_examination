import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { VideoItemType } from "../types/types";

const useFetchVideos = (): {
  videos: VideoItemType[] | null;
  isLoading: boolean;
  error: string | null;
} => {
  const [videos, setVideos] = useState<VideoItemType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<VideoItemType[]> = await axios.get(
          "http://localhost:3001/videos"
        );
        setVideos(response.data);
      } catch (error) {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return { videos, isLoading, error };
};

export default useFetchVideos;
