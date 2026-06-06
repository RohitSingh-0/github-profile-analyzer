import axios from "axios";
import {
  findByLogin,
  createProfile,
  updateProfile,
  getAllProfiles,
  getProfileByLogin,
} from "../repositories/profile.repository.js";

const analyzeProfile = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  const response = await axios.get(url);

  const {
    login,
    id,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  } = response.data;

  const profileData = {
    login,
    id,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    created_at: new Date(created_at),
    updated_at: new Date(updated_at),
  };

  const existingProfile = await findByLogin(login);

  if (existingProfile) {
    await updateProfile(profileData);

    return {
      success: true,
      message: "Profile updated successfully",
      data: profileData,
    };
  }

  await createProfile(profileData);

  return {
    success: true,
    message: "Profile saved successfully",
    data: profileData,
  };
};

const getProfiles = async () => {
  return await getAllProfiles();
};

const getProfile = async (username) => {
  return await getProfileByLogin(username);
};

export {
  analyzeProfile,
  getProfiles,
  getProfile,
};