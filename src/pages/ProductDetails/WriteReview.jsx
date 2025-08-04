import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { FaRegStar, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "@/components/Custom/Modal";
import PropTypes from "prop-types";

const WriteReview = ({ isModalOpen, setIsModalOpen, getData, setRatings }) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.next);

  const onSubmit = async (data) => {
    if (!userInfo) {
      navigate("/login");
    } else {
      setLoading(true);
      const parms = {
        rating: rating,
        review: data?.review,
        product: getData?._id,
        user: userInfo?._id,
        platform: "microsoft",
        recommend: "yes",
      };

      try {
        const res = await axios.post(`${Base_url}/rating/create`, parms);
        console.log(res?.data);

        if (res.data.status === "success") {
          toast.success(res?.data?.message);
          setIsModalOpen(false);
          getData("");
          axios.get(`${Base_url}/products/get/${getData?._id}`).then((res) => {

            console.log(res, 'ratings');


            setRatings(res?.data?.data)

          }).catch((res) => {

          });
        } else {
          toast.success(res?.data?.message);
        }
      } catch (error) {
        console.error(error);
        if (error?.response?.data?.status === 'fail') {
          toast.error(error?.response?.data?.message);
          setIsModalOpen(false)
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="w-[50%]"
    >
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={getData?.Image1} className="w-12 object-cover" alt="" />
            <div>
              <h1 className="capitalize font-normal text-2xl">My Review</h1>
              <p>The Order Of Masks by {getData?.brand?.name}</p>
            </div>
          </div>
          <MdClose
            size={25}
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <div className="flex gap-5 flex-wrap">
            <div>
              <ul className="py-3 flex gap-2 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <li
                    key={star}
                    className={`w-14 h-14 flex justify-center items-center border border-orange rounded-md cursor-pointer transition duration-300 ${star <= (hover || rating)
                        ? " bg-blue text-white"
                        : "text-orange"
                      }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {star <= (hover || rating) ? (
                      <FaStar size={24} aria-label={`${star} star`} />
                    ) : (
                      <FaRegStar size={24} aria-label={`${star} star`} />
                    )}
                  </li>
                ))}
              </ul>
              <p>{rating} out of 5 stars selected. Product is Average.</p>
            </div>
            <div className="w-full">
              <label className="text-lg">Review*</label>
              <textarea
                placeholder=""
                className={`border outline-none p-3 rounded-sm w-full py-3 ${errors.review ? "border-red" : ""
                  }`}
                {...register("review", { required: "Review is required" })}
              ></textarea>
              {errors.review && (
                <p className="text-red text-sm">{errors.review.message}</p>
              )}
            </div>
          </div>


          <Button
            disabled={loading}
            className={`mt-3 py-2 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"}`}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              "Submit"
            )}
          </Button>

        </form>
      </div>
    </Modal>
  );
};

WriteReview.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  getData: PropTypes.object.isRequired,
};

export default WriteReview;
