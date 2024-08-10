
import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.js", //here we need to give accurate path where our schema file is store
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://drag_owner:gir1GRAD0lnO@ep-shrill-water-a1gatmma.ap-southeast-1.aws.neon.tech/drag?sslmode=require",
  }
});