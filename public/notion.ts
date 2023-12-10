import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_SECRET_KEY });

export async function getBlogPosts() {
  const databaseId = process.env.NOTION_DB_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response;
}
