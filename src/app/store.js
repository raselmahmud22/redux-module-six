import { configureStore } from "@reduxjs/toolkit";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import TagsSlice from "../features/Tags/TagsSlice";
import VideoSlice from "../features/Video/VideoSlice";
import VideosSlice from "../features/Videos/VideosSlice";

export const store = configureStore({
  reducer: {
    videos: VideosSlice,
    tags: TagsSlice,
    video: VideoSlice,
    relatedVideo: relatedVideosSlice,
  },
});
