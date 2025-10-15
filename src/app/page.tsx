import * as actions from "@/actions"
import List from "@/components/List/List";
import Title from "@/components/Title";

/**
 * ====
 * TODO
 * ====
 * - user login
 * - authentication (Clerk)
 * - sort function (alphabetical, rating)
 * - image bug on single page
 * ====
 * DONE
 * ====
 * - layout on desktop

 */

export default async function Home() {

  const data = await actions.getData();
  const tags = await actions.getTagCollection();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <Title text="Coffee Crawl" />
      <List data={data} tags={tags[0].tag} />
    </div>
  );
}
