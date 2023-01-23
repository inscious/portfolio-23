import React from "react";

const Contact = () => {
    return (
        <div
            className="mx-auto flex h-[95vh] w-screen items-center bg-black"
            id="contact"
        >
            <section className="mx-auto w-full max-w-7xl px-5">
                <h1 className="text-8xl font-bold text-white">Contact</h1>
                <div className="mx-auto w-full max-w-7xl px-5">
                    <form className="lg:w-7xl mx-auto my-14 w-full">
                        <div className="flex gap-3">
                            <input
                                className="mx-auto mb-5 block w-full rounded-md bg-gray-100 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                                placeholder="Name"
                                type="text"
                                name="name"
                            />
                            <input
                                className="mx-auto mb-5 block w-full rounded-md bg-gray-100 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                        <input
                            id="place_state"
                            name="place_state"
                            type="text"
                            className="mx-auto mb-5 block w-full rounded-md bg-gray-100 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                            placeholder="Phone Number"
                        ></input>
                        <input
                            id="comment"
                            name="comment"
                            type="text"
                            className="mx-auto mb-5 block w-full rounded-md bg-gray-100 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                            placeholder="Comment"
                        ></input>
                        <button
                            // onClick={handleSubmit}
                            className="flex w-[50%] items-center justify-center rounded-md border border-amber-500 px-10 py-3 text-white duration-150 hover:border-black/0 hover:bg-amber-500 hover:text-white dark:text-amber-500 dark:hover:text-white lg:w-full"
                        >
                            Send
                        </button>
                    </form>
                    {/* <div className="">
                        <p className="pt-10 text-center font-thin text-gray-100 duration-150 dark:text-gray-500">
                            <span className="font-bold text-gray-300 duration-150 dark:text-black">
                                Exchange Policy:{" "}
                            </span>
                            We offer exchanges for product that was damaged
                            during shipping, incorrect item was shipped or for a
                            different size. To begin an exchange please email
                            customer service at,{" "}
                            <span className="text-amber-500">
                                bajagoons@gmail.com
                            </span>
                            , within 5 days of receiving your order.{" "}
                        </p>
                        <p className="pt-10 text-center font-thin text-gray-100 duration-150 dark:text-gray-500">
                            <span className="font-bold text-gray-300 duration-150 dark:text-black">
                                Shipping:{" "}
                            </span>
                            Orders will be processed within 5 business days,
                            shipping can take 2-5 business days. For questions
                            regarding your order please contact us,{" "}
                            <span className="text-amber-500 duration-150 dark:font-medium dark:text-black">
                                bajagoons@gmail.com
                            </span>
                            .
                        </p>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Contact;
