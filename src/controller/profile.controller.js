import {
  analyzeProfile,
  getProfiles,
  getProfile,
} from "../services/profile.service.js";

const analyze = async (req, res) => {
  try {
    const { username } = req.params;

    const result = await analyzeProfile(username);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const profiles = await getProfiles();

    res.status(200).json({
      success: true,
      data: profiles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getOne = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await getProfile(username);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  analyze,
  getAll,
  getOne,
};