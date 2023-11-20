import { useLoaderData } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import swal from 'sweetalert';

const EditProduct = () => {
  const { category, desc, regular_price, sale_price, title, _id } =
    useLoaderData();
  const axiosSecure = useAxios();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const category = formData.get('category');
    const regular_price = parseFloat(formData.get('regular_price'));
    const sale_price = parseFloat(formData.get('sale_price'));
    const desc = formData.get('desc');
    const updatedProductData = {
      title,
      category,
      regular_price,
      sale_price,
      desc,
    };
    console.log(updatedProductData);

    const updateItem = await axiosSecure.patch(
      `/v1/allproducts/${_id}`,
      updatedProductData
    );
    {
      if (updateItem.data.modifiedCount > 0) {
        swal(
          'Congratulation!',
          'Your product updated successfully!',
          'success'
        );
      }
    }
  };

  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Edit Product
        </h2>
        <form
          className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl"
          onSubmit={handleUpdate}
        >
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* title */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="title" className="form-label">
                Product Title
              </label>
              <input
                type="text"
                placeholder="Your Product Title"
                name="title"
                className="input-with-shadow"
                required
              />
            </div>
            {/* category */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                placeholder="Your Product Category"
                className="input-with-shadow"
                name="category"
              />
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* regular price */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="rprice" className="form-label">
                Regular Price
              </label>
              <input
                type="number"
                placeholder=" Regular Price"
                name="rprice"
                className="input-with-shadow"
                required
              />
            </div>
            {/* Sale price */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="sprice" className="form-label">
                Sale Price
              </label>
              <input
                type="number"
                placeholder=" Sale Price"
                name="sprice"
                className="input-with-shadow"
                required
              />
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
            {/* Size */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="size" className="form-label">
                Size
              </label>
              <div className="flex gap-6 flex-wrap">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="xs"
                    className="input-checkbox mr-1"
                    value="xs"
                  />
                  <label htmlFor="xs">XS</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="sm"
                    className="input-checkbox mr-1"
                    value="sm"
                  />
                  <label htmlFor="sm">SM</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="m"
                    className="input-checkbox mr-1"
                    value="m"
                  />
                  <label htmlFor="m">M</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="l"
                    className="input-checkbox mr-1"
                    value="l"
                  />
                  <label htmlFor="l">L</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="xl"
                    className="input-checkbox mr-1"
                    value="xl"
                  />
                  <label htmlFor="xl">XL</label>
                </div>
              </div>
            </div>
            {/* Color */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <div className="flex gap-6 flex-wrap">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="black"
                    className="input-checkbox mr-1"
                    value="black"
                  />
                  <label htmlFor="black">Black</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="red"
                    className="input-checkbox mr-1"
                    value="red"
                  />
                  <label htmlFor="red">Red</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="white"
                    className="input-checkbox mr-1"
                    value="white"
                  />
                  <label htmlFor="white">White</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="green"
                    className="input-checkbox mr-1"
                    value="green"
                  />
                  <label htmlFor="green">Green</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="blue"
                    className="input-checkbox mr-1"
                    value="blue"
                  />
                  <label htmlFor="blue">Blue</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="mix"
                    className="input-checkbox mr-1"
                    value="mix"
                  />
                  <label htmlFor="mix">Mix</label>
                </div>
              </div>
            </div>
          </div>
          {/* input group */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            {/* description */}
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              type="number"
              placeholder="Enter your product details"
              name="desc"
              className="input-with-shadow"
              rows="4"
              required
            />
          </div>
          {/* featured image */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            <label htmlFor="featured_image" className="form-label">
              Featured Image
            </label>
            <input
              type="file"
              name="featured_image"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          {/* gallery image*/}
          <div className="flex flex-col gap-4 justify-between mt-6">
            <label htmlFor="gallery_image" className="form-label">
              Gallery Image
            </label>
            <input
              type="file"
              name="gallery_image"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <div className="mt-12">
            <button
              className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded"
              type="submit"
            >
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;