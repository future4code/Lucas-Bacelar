import axios from "axios";
import { baseURL, config } from "./config";

export const getPlaylists = async () => {
  try {
    const request = await axios.get(baseURL, config);
    if (request) {
      return request.data.result.list;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const createPlaylist = async (newName) => {
  const body = {
    name: newName,
  };

  try {
    await axios.post(baseURL, body, config);
    return true;
  } catch (error) {
    return false;
  }
};
