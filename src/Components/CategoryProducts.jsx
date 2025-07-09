import { useLoaderData } from "react-router-dom";

const CategoryProducts = () => {
  const products = useLoaderData()
  console.log(products);
  return (
    <div className='lg:mx-16 px-4 py-10'>
      {/* Page Title */}
      <section className='bg-green-100 py-8 text-center rounded-lg'>
        <h1 className='text-4xl font-extrabold text-green-800'>Face Care Products</h1>
        <p className='text-green-600 text-sm mt-2'> Discover the best of our curated <span className="font-semibold">Face Care</span> collection, designed to naturally nourish and enhance your beauty.</p>
      </section>

      {/* <section className="bg-green-100 p-5">

      </section> */}
    </div>
  );
};

export default CategoryProducts;