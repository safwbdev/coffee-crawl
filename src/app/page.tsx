import * as actions from "@/actions"
// import AddModal from "@/components/Modal/AddModal";
// import AddModalButton from "@/components/Modal/AddModalButton";
import List from "@/components/List/List";

/**
 * ====
 * TODO
 * ====
 * - mobile layout
 * - single page layout
 * - responsiveness
 * - favorites page
 * - sort function
 * ====
 * DONE
 * ====
 * - navigation
 * - social media
 * - rating modal & functionality
 * - image upload | cloudinary
 * - delete modal
 * - add favorite
 * - single page for each place
 * - update add/edit forms
 * - popup modal
 * - forms in modal
 * - forms in modal page
 * - array data
 * - filter by complete, incmoplete, 
 * - status frontend doesn't update upon clicking 
 * 
 */

export default async function Home() {

  const data = await actions.getData();

  return (
    <>
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <h1 className="text-5xl fomnt-extrabold uppercase mb-5 text-center">
          <span className="text-4xl font-extrabold uppercase">Coffee Crawl</span>
        </h1>
        <div className="flex justify-center flex-col items-center">
          <List data={data} />
        </div>
      </div>
      {/* <AddModalButton />
      <AddModal /> */}
    </>
  );
}
