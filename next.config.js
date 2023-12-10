
const nextConfig = {
trailingSlash: true,
output: 'export',
env: {
  customKey: 'my-value',
  NOTION_SECRET_KEY: process.env.NOTION_SECRET_KEY, 
  NOTION_DB_ID: process.env.NOTION_DB_ID, 
},
}
module.exports = nextConfig