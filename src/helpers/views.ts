import { Client, Databases, ID, Permission, Query, Role } from "appwrite"

const client = new Client()

client
  .setEndpoint(import.meta.env.ASTRO_ENDPOINT)
  .setProject(import.meta.env.ASTRO_PROJECT_ID)

const database = new Databases(client)

const DATABASE_ID = import.meta.env.ASTRO_DATABASE_ID
const VIEWS_COLLECTION_ID = import.meta.env.ASTRO_VIEWS_COLLECTION_ID

export async function getViews(path: string): Promise<number> {
  try {
    const result = await database.listDocuments(
      DATABASE_ID,
      VIEWS_COLLECTION_ID,
      [Query.equal("path", [path])],
    )

    if (result.documents.length > 0) return result.documents[0].views

    addView(path)
    return 1
  } catch (err) {
    return 1
  }
}

export async function addView(path: string): Promise<void> {
  try {
    await database.createDocument(
      DATABASE_ID,
      VIEWS_COLLECTION_ID,
      ID.unique(),
      {
        path,
        views: 1,
      },
      [Permission.write(Role.guests())]
    )
  } catch (err) {
    console.log("Cannot add view ", err)
  }
}

export async function updateView(path: string): Promise<number> {
  try {
    const existing = await database.listDocuments(
      DATABASE_ID,
      VIEWS_COLLECTION_ID,
      [Query.equal("path", [path])]
    )

    if (existing.documents.length != 0) {
      // document exists
      const existingDoc = existing.documents[0]

      await database.updateDocument(
        DATABASE_ID,
        VIEWS_COLLECTION_ID,
        existing.documents[0].$id,
        {
          path,
          views: existingDoc.views + 1,
        },
        [Permission.update(Role.guests())]
      )

      return existing.documents[0].views
    }

    addView(path)
    return 1
  } catch (err) {
    console.log(err)
    return 1
  }
}
