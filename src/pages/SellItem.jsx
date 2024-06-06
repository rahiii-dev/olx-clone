import { Camera } from "lucide-react";
import HeaderBlank from "../components/HeaderBlank";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { PostCollection, storage } from "../utils/firebase";
import { useAuth } from "../context/AuthContext";
import { addDoc } from "firebase/firestore";

const SellItem = () => {
  const {currentUser} = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    state: "",
    city: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [imgPreview, setImgPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/webp"];

    if (file && !validTypes.includes(file.type)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        image: "Only JPG, PNG, and WEBP are allowed.",
      }));
      setImgPreview(null);
      setFormData((prevData) => ({
        ...prevData,
        image: null,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        image: "",
      }));
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      setImgPreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};
    setFormErrors({})

    if (!formData.title) {
      errors.title = "Title is required";
      valid = false;
    } else if (formData.title.length < 3) {
      errors.title = "Title is too short";
      valid = false;
    }

    if (!formData.price) {
      errors.price = "Price is required";
      valid = false;
    } else if (isNaN(formData.price)){
      errors.price = "Price is must be a number";
      valid = false;
    } else if (formData.price < 1){
      errors.price = "Price must be a atleat 1";
      valid = false;
    }

    if (!formData.state) {
      errors.state = "State is required";
      valid = false;
    }
    if (!formData.city) {
      errors.city = "City is required";
      valid = false;
    }

    if (!formData.image) {
      errors.image = "Image is required";
      valid = false;
    }

    if (!valid) {
      setFormErrors(errors);
    }

    return valid;
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value.trim(),
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true)
    try {
      const imageRef = ref(storage, `images/${formData.image.name}`);
      await uploadBytes(imageRef, formData.image);
      const imageUrl = await getDownloadURL(imageRef);
      
      await addDoc(PostCollection, {
        ...formData,
        image : imageUrl,
        userId : currentUser.uid
      });

      setFormData({
        title: "",
        price: "",
        description: "",
        state: "",
        city: "",
        image: null,
      })
      setImgPreview(null);
      alert("Item Posted Succesfully.")

    } catch (error) {
      console.log(error);
      alert("Failed to post item.")
    }
    finally{
      setIsSubmitting(false)
    }
  };

  return (
    <>
      <HeaderBlank />
      <main>
        <section>
          <div className="container py-8">
            <h1 className="text-center text-xl font-semibold uppercase mb-3">
              Post Your Add
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="w-full max-w-[600px] bg-white mx-auto px-4 py-8 border border-gray-300 rounded">
                <div className="mb-3">
                  <label
                    htmlFor="title"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Title*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={formData.title}
                      onChange={handleInputs}
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formErrors.title && (
                    <div className="text-red-500">{formErrors.title}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="price"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Price*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleInputs}
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formErrors.price && (
                    <div className="text-red-500">{formErrors.price}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputs}
                      rows={3}
                      className="block w-full rounded border-0 p-2 outline-none
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="state"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    State*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputs}
                      id="state"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formErrors.state && (
                    <div className="text-red-500">{formErrors.state}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="city"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    City*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputs}
                      id="city"
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formErrors.city && (
                    <div className="text-red-500">{formErrors.city}</div>
                  )}
                </div>

                <div className="mb-5">
                  <h2 className="text-lg font-semibold mb-2">Upload Photo*</h2>
                  <div className="flex items-center gap-3">
                    <div className="relative size-32 border-2 border-gray-300 rounded transition-colors duration-300 hover:border-black">
                      <label
                        htmlFor="image-1"
                        className="text-gray-300 flex flex-col justify-center items-center
                          w-full h-full cursor-pointer transition-colors duration-300 hover:text-black"
                      >
                        <Camera size={32} />
                        <span className="text-nowrap">Add Photo</span>
                      </label>
                      <input
                        type="file"
                        name="image-1"
                        id="image-1"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>

                    <div className="relative size-32 border-2 border-gray-300 rounded">
                      {imgPreview && (
                        <img className="w-full h-auto" src={imgPreview} />
                      )}
                    </div>
                  </div>
                  {formErrors.image && (
                    <div className="text-red-500">{formErrors.image}</div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className={`font-bold p-3 rounded  text-white ${isSubmitting ? 'bg-slate-400' : 'bg-black'} `}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ?'Posting....' :'Post Now'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SellItem;
