const Admin = require("../models/Admin");

const initializeAdmin = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne();

    if (!existingAdmin) {
      // Create default admin user
      const defaultAdmin = new Admin({
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
      });

      await defaultAdmin.save();
      console.log("✅ Default admin user created successfully");
      console.log(`Username: ${defaultAdmin.username}`);
      console.log("⚠️  Please change the default password after first login!");
    } else {
      console.log("✅ Admin user already exists");
    }
  } catch (error) {
    console.error("❌ Error initializing admin user:", error);
  }
};

module.exports = initializeAdmin;
