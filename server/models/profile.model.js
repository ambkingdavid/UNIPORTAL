const { Student, Profile } = require('../utils/db');
const { customLogger } = require('../utils/helpers');

class StudentProfile {
  static async createProfile(userId, profileData) {
    const user = await Student.findByPk(userId);
    if (!user) {
      throw new Error('Student not found');
    }

    // Create a new profile for the user
    try {
      const profile = await Profile.create(profileData);
      await user.setProfile(profile);

      return profile;
    } catch (err) {
      throw err;
    }
  }

  static async get(userId) {
    const user = await Student.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const profile = await user.getProfile();
    return profile;
  }

  static async update(userId, updatedProfileData) {
    try {
      // Find the user
      const user = await Student.findByPk(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Get the associated profile
      const profile = await user.getProfile();

      if (!profile) {
        throw new Error('User does not have a profile');
      }

      // Update the profile data
      Object.assign(profile, updatedProfileData);

      // Save the changes to the database
      await profile.save();

      return profile;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = StudentProfile;