import pool from "../config/db.js";

const findByLogin = async (login) => {
  const [rows] = await pool.execute(
    "SELECT * FROM profiles WHERE login = ?",
    [login]
  );

  return rows[0];
};

const createProfile = async (profile) => {
  const {
    id,
    login,
    followers,
    following,
    public_repos,
    bio,
    avatar_url,
    created_at,
    updated_at,
  } = profile;

  const [result] = await pool.execute(
    `INSERT INTO profiles
    (
      github_id,
      login,
      followers,
      following,
      public_repos,
      bio,
      avatar_url,
      created_at,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      login,
      followers,
      following,
      public_repos,
      bio,
      avatar_url,
      created_at,
      updated_at,
    ]
  );

  return result;
};

const updateProfile = async (profile) => {
  const {
    id,
    followers,
    following,
    public_repos,
    bio,
    avatar_url,
    created_at,
    updated_at,
  } = profile;

  const [result] = await pool.execute(
    `UPDATE profiles
     SET followers = ?,
         following = ?,
         public_repos = ?,
         bio = ?,
         avatar_url = ?,
         created_at = ?,
         updated_at = ?
     WHERE github_id = ?`,
    [
      followers,
      following,
      public_repos,
      bio,
      avatar_url,
      created_at,
      updated_at,
      id,
    ]
  );

  return result;
};

const getAllProfiles = async () => {
  const [rows] = await pool.execute(
    "SELECT * FROM profiles"
  );

  return rows;
};

const getProfileByLogin = async (login) => {
  const [rows] = await pool.execute(
    "SELECT * FROM profiles WHERE login = ?",
    [login]
  );

  return rows[0];
};

export {
  findByLogin,
  createProfile,
  updateProfile,
  getAllProfiles,
  getProfileByLogin,
};